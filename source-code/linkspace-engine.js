/**
 * LinkSpaceForge Pro (v1.0.0) — Core ECSS-E-ST-50-05C Rev. 2 & CCSDS 401.0-B-32 RF Link Engine
 * Standards:
 *  - ECSS-E-ST-50-05C Rev. 2 (Space engineering: Radio frequency and modulation)
 *  - CCSDS 401.0-B-32 (Radio Frequency and Modulation Systems—Part 1: Earth Stations and Spacecraft)
 *  - ITU-R P.676 & P.618 (Atmospheric gas absorption & precipitation attenuation)
 */

export const ECSS_50_CONSTANTS = {
  SPEED_OF_LIGHT_M_S: 299792458.0,
  BOLTZMANN_K_DBW_HZ_K: -228.599, // 10 * log10(1.380649e-23)
  STANDARD_TEMP_K: 290.0,
  NORMATIVE_MIN_MARGIN_DB: {
    nominal_telemetry: 3.0,     // ECSS-E-ST-50-05C Clause 5.2.1 space-to-ground
    critical_leop_safemode: 6.0 // Clause 5.2.2 LEOP / omni safe-mode coverage
  }
};

export const MISSION_PRESETS = {
  leo_s_band_ttc: {
    id: "leo_s_band_ttc",
    name: "LEO SSO SmallSat S-Band TT&C Downlink (2250 MHz, KSAT 7.3m Ground Station)",
    linkRole: "space_to_ground_telemetry",
    criticalPhase: false,
    carrierFrequencyHz: 2.250e9,
    dataRateBps: 2.0e6, // 2 Mbps telemetry
    maxSlantRangeKm: 2150.0, // 600 km SSO at 5 deg elevation mask
    elevationAngleDeg: 5.0,
    txPowerWatts: 2.5, // 4.0 dBW
    txFeederLossDb: 1.2,
    txAntennaGainDbi: 2.5, // Broad-beam patch antenna
    txPointingLossDb: 0.8,
    rxAntennaDiameterM: 7.3, // Standard KSAT Svalbard / Troll S-band dish
    rxAntennaEfficiency: 0.60,
    rxLnaNoiseTempK: 85.0,
    rxAntennaNoiseTempK: 45.0,
    rxFeederLossDb: 0.5,
    polarizationMismatchLossDb: 0.3,
    atmosphericGasLossDb: 0.15,
    rainCloudLossDb: 0.10,
    modulationCoding: "qpsk_rate_1_2_conv_rs",
    requiredEbN0Db: 3.2, // Rate 1/2 Conv (k=7) + RS(255,223) @ 1e-6 BER
    implementationLossDb: 1.5
  },
  leo_x_band_payload_downlink: {
    id: "leo_x_band_payload_downlink",
    name: "LEO High-Resolution Optical Earth Obs X-Band Direct Downlink (8200 MHz, 150 Mbps)",
    linkRole: "space_to_ground_telemetry",
    criticalPhase: false,
    carrierFrequencyHz: 8.200e9,
    dataRateBps: 150.0e6, // 150 Mbps science stream
    maxSlantRangeKm: 1980.0,
    elevationAngleDeg: 7.0,
    txPowerWatts: 8.0, // 9.03 dBW
    txFeederLossDb: 1.5,
    txAntennaGainDbi: 16.5, // Steerable isogrid horn
    txPointingLossDb: 0.5,
    rxAntennaDiameterM: 11.2, // 11.2m Earth Station
    rxAntennaEfficiency: 0.62,
    rxLnaNoiseTempK: 75.0,
    rxAntennaNoiseTempK: 55.0,
    rxFeederLossDb: 0.4,
    polarizationMismatchLossDb: 0.2,
    atmosphericGasLossDb: 0.45,
    rainCloudLossDb: 1.20, // ITU-R X-band rain fade at 99.9% availability
    modulationCoding: "dvb_s2_qpsk_3_4_ldpc",
    requiredEbN0Db: 4.2, // DVB-S2 QPSK 3/4 LDPC+BCH @ 1e-7 FER
    implementationLossDb: 1.8
  },
  geo_ka_band_feeder_link: {
    id: "geo_ka_band_feeder_link",
    name: "GEO High-Throughput Satellite Ka-Band Gateway Downlink (26.5 GHz, 650 Mbps)",
    linkRole: "space_to_ground_telemetry",
    criticalPhase: false,
    carrierFrequencyHz: 26.500e9,
    dataRateBps: 650.0e6, // 650 Mbps broadband transponder
    maxSlantRangeKm: 38200.0, // GEO sub-satellite to mid-latitude gateway
    elevationAngleDeg: 28.0,
    txPowerWatts: 45.0, // 16.53 dBW TWTA
    txFeederLossDb: 2.0,
    txAntennaGainDbi: 44.0, // 1.8m gimbaled Ka spot beam
    txPointingLossDb: 0.6,
    rxAntennaDiameterM: 9.0, // 9.0m Gateway dish
    rxAntennaEfficiency: 0.65,
    rxLnaNoiseTempK: 110.0,
    rxAntennaNoiseTempK: 95.0,
    rxFeederLossDb: 0.6,
    polarizationMismatchLossDb: 0.4,
    atmosphericGasLossDb: 0.85,
    rainCloudLossDb: 3.80, // Heavy Ka-band rain fade margin
    modulationCoding: "dvb_s2x_16apsk_2_3_ldpc",
    requiredEbN0Db: 7.5, // 16APSK 2/3 LDPC @ 1e-7 FER
    implementationLossDb: 2.2
  }
};

export function validateRFConfig(config) {
  if (!config || typeof config !== "object") {
    throw new Error("RF configuration object is required.");
  }
  if (Number(config.carrierFrequencyHz) <= 0) {
    throw new Error("Carrier frequency must be positive (Hz).");
  }
  if (Number(config.dataRateBps) <= 0) {
    throw new Error("User bit rate must be positive (bps).");
  }
  if (Number(config.maxSlantRangeKm) <= 0) {
    throw new Error("Slant range distance must be positive (km).");
  }
  if (Number(config.txPowerWatts) <= 0) {
    throw new Error("Transmitter RF output power must be positive (W).");
  }
  return true;
}

/**
 * Solves Free Space Path Loss (FSPL) and total channel propagation losses per ECSS-E-ST-50-05C Clause 4.
 */
export function solvePropagationPathLoss(config) {
  validateRFConfig(config);
  const freqHz = Number(config.carrierFrequencyHz);
  const dM = Number(config.maxSlantRangeKm) * 1000.0;
  const c = ECSS_50_CONSTANTS.SPEED_OF_LIGHT_M_S;
  const wavelengthM = c / freqHz;

  // Free Space Path Loss (FSPL) = 20 * log10(4 * pi * d / lambda)
  const fsplDb = 20.0 * Math.log10((4.0 * Math.PI * dM) / wavelengthM);

  const lAtm = Number(config.atmosphericGasLossDb || 0.2);
  const lRain = Number(config.rainCloudLossDb || 0.5);
  const lPol = Number(config.polarizationMismatchLossDb || 0.3);
  const lPointTx = Number(config.txPointingLossDb || 0.5);

  const totalPropagationLossDb = fsplDb + lAtm + lRain + lPol + lPointTx;

  return {
    carrierFrequencyGhz: Number((freqHz / 1e9).toFixed(4)),
    wavelengthMm: Number((wavelengthM * 1000.0).toFixed(2)),
    slantRangeKm: Number(config.maxSlantRangeKm),
    freeSpacePathLossDb: Number(fsplDb.toFixed(2)),
    atmosphericGasLossDb: Number(lAtm.toFixed(2)),
    rainCloudLossDb: Number(lRain.toFixed(2)),
    polarizationLossDb: Number(lPol.toFixed(2)),
    txPointingLossDb: Number(lPointTx.toFixed(2)),
    totalPropagationLossDb: Number(totalPropagationLossDb.toFixed(2))
  };
}

/**
 * Solves Spacecraft EIRP, Ground Station Receiver G/T, and System Noise Temperature per CCSDS 401.0-B.
 */
export function solveAntennaAndNoiseFigures(config) {
  const pTxW = Number(config.txPowerWatts);
  const pTxDbw = 10.0 * Math.log10(pTxW);
  const lTxFeed = Number(config.txFeederLossDb || 1.0);
  const gTxDbi = Number(config.txAntennaGainDbi);
  const eirpDbw = pTxDbw - lTxFeed + gTxDbi;

  // Ground Station Dish Gain: G_rx = 10 * log10(eta * (pi * D / lambda)^2)
  const diamM = Number(config.rxAntennaDiameterM);
  const etaRx = Number(config.rxAntennaEfficiency || 0.60);
  const freqHz = Number(config.carrierFrequencyHz);
  const wavelengthM = ECSS_50_CONSTANTS.SPEED_OF_LIGHT_M_S / freqHz;
  const gRxDbi = 10.0 * Math.log10(etaRx * Math.pow((Math.PI * diamM) / wavelengthM, 2));

  // System Noise Temperature T_sys = T_ant + T_LNA + T_sky_feed
  const tAntK = Number(config.rxAntennaNoiseTempK || 50.0);
  const tLnaK = Number(config.rxLnaNoiseTempK || 80.0);
  const lRxFeed = Number(config.rxFeederLossDb || 0.5);
  const tFeedK = ECSS_50_CONSTANTS.STANDARD_TEMP_K * (Math.pow(10, lRxFeed / 10.0) - 1.0);
  const tSysK = tAntK + tLnaK + tFeedK;

  // Receiver Figure of Merit (G/T) = G_rx - 10 * log10(T_sys)
  const gOverTDbK = gRxDbi - 10.0 * Math.log10(tSysK);

  return {
    txPowerWatts: Number(pTxW.toFixed(2)),
    txPowerDbw: Number(pTxDbw.toFixed(2)),
    txFeederLossDb: Number(lTxFeed.toFixed(2)),
    txAntennaGainDbi: Number(gTxDbi.toFixed(2)),
    eirpDbw: Number(eirpDbw.toFixed(2)),
    rxDishDiameterM: Number(diamM.toFixed(1)),
    rxAntennaGainDbi: Number(gRxDbi.toFixed(2)),
    systemNoiseTempK: Number(tSysK.toFixed(1)),
    gOverTDbK: Number(gOverTDbK.toFixed(2))
  };
}

/**
 * Solves C/N0, Received Eb/N0, Required Eb/N0, and ECSS Normative Link Margin per ECSS-E-ST-50-05C Clause 5.
 */
export function solveLinkBudgetMargin(config, propagation, antenna) {
  const eirpDbw = antenna.eirpDbw;
  const propLossDb = propagation.totalPropagationLossDb;
  const gOverT = antenna.gOverTDbK;
  const kBDbw = ECSS_50_CONSTANTS.BOLTZMANN_K_DBW_HZ_K;

  // C/N0 (dB-Hz) = EIRP - TotalLosses + (G/T) - 10*log10(kB)
  const cOverN0DbHz = eirpDbw - propLossDb + gOverT - kBDbw;

  // Received Eb/N0 = C/N0 - 10 * log10(BitRate)
  const bitRateBps = Number(config.dataRateBps);
  const bitRateDbHz = 10.0 * Math.log10(bitRateBps);
  const receivedEbN0Db = cOverN0DbHz - bitRateDbHz;

  const requiredEbN0Db = Number(config.requiredEbN0Db);
  const implLossDb = Number(config.implementationLossDb || 1.5);
  const netRequiredEbN0Db = requiredEbN0Db + implLossDb;

  // Link Margin = Received Eb/N0 - Net Required Eb/N0
  const linkMarginDb = receivedEbN0Db - netRequiredEbN0Db;

  const minRequiredMarginDb = config.criticalPhase
    ? ECSS_50_CONSTANTS.NORMATIVE_MIN_MARGIN_DB.critical_leop_safemode
    : ECSS_50_CONSTANTS.NORMATIVE_MIN_MARGIN_DB.nominal_telemetry;

  const marginCompliant = linkMarginDb >= minRequiredMarginDb;

  return {
    dataRateBps: Number(bitRateBps),
    dataRateMbps: Number((bitRateBps / 1e6).toFixed(3)),
    cOverN0DbHz: Number(cOverN0DbHz.toFixed(2)),
    receivedEbN0Db: Number(receivedEbN0Db.toFixed(2)),
    requiredEbN0Db: Number(requiredEbN0Db.toFixed(2)),
    implementationLossDb: Number(implLossDb.toFixed(2)),
    netRequiredEbN0Db: Number(netRequiredEbN0Db.toFixed(2)),
    linkMarginDb: Number(linkMarginDb.toFixed(2)),
    minRequiredMarginDb: Number(minRequiredMarginDb.toFixed(1)),
    marginCompliant
  };
}

export function runCompleteRFSynthesis(config) {
  const propagation = solvePropagationPathLoss(config);
  const antenna = solveAntennaAndNoiseFigures(config);
  const link = solveLinkBudgetMargin(config, propagation, antenna);

  return {
    timestampIso: "2026-10-21T11:00:00Z",
    config,
    propagation,
    antenna,
    link
  };
}

export function exportECSSRFManifestXML(synthesis, auditReport) {
  const { config, propagation, antenna, link } = synthesis;
  return `<?xml version="1.0" encoding="UTF-8"?>
<ECSS_RFLinkSystemManifest standard="ECSS-E-ST-50-05C-Rev.2" ccsdsStandard="CCSDS-401.0-B-32" version="1.0.0">
  <MissionHeader name="${config.name}" freqGhz="${propagation.carrierFrequencyGhz}" dataRateMbps="${link.dataRateMbps}" slantRangeKm="${propagation.slantRangeKm}" />
  <SpacecraftTransmitter powerWatts="${antenna.txPowerWatts}" powerDbw="${antenna.txPowerDbw}" gainDbi="${antenna.txAntennaGainDbi}" eirpDbw="${antenna.eirpDbw}" />
  <PropagationChannel fsplDb="${propagation.freeSpacePathLossDb}" atmLossDb="${propagation.atmosphericGasLossDb}" rainLossDb="${propagation.rainCloudLossDb}" totalLossDb="${propagation.totalPropagationLossDb}" />
  <GroundStationReceiver dishDiamM="${antenna.rxDishDiameterM}" rxGainDbi="${antenna.rxAntennaGainDbi}" tSysK="${antenna.systemNoiseTempK}" gOverT="${antenna.gOverTDbK}" />
  <LinkBudget cOverN0DbHz="${link.cOverN0DbHz}" receivedEbN0="${link.receivedEbN0Db}" reqEbN0="${link.requiredEbN0Db}" linkMarginDb="${link.linkMarginDb}" minMarginDb="${link.minRequiredMarginDb}" />
  <NormativeAudit passCount="${auditReport.passCount}" totalChecks="${auditReport.totalChecks}" certified="${auditReport.certified}" />
</ECSS_RFLinkSystemManifest>`;
}
