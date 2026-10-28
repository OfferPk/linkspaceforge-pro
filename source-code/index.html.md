\<\!DOCTYPE html\>  
\<html lang="en" class="dark"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0" /\>  
  \<title\>LinkSpaceForge Pro v1.0.0 — ECSS-E-ST-50-05C Rev.2 Spacecraft RF Link Budget Studio\</title\>  
  \<script src="https\://cdn.tailwindcss.com/3.4.17" async\>\</script\>  
  \<link rel="preconnect" href="https\://fonts.googleapis.com" /\>  
  \<link rel="preconnect" href="https\://fonts.gstatic.com" crossorigin /\>  
  \<link href="https\://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&family=JetBrains+Mono:wght@400;500;600;700\&display=swap" rel="stylesheet" /\>  
  \<style\>  
    /\* Air-Gapped / Offline Cleanroom Utility Fallback CSS \*/  
    \*, \*::before, \*::after { box-sizing: border-box; }  
    body { margin: 0; font-family: 'Inter', system-ui, \-apple-system, sans-serif; background-color: \#060b16; color: \#e2e8f0; }  
    header { background: rgba(2, 6, 23, 0.94); border-bottom: 1px solid \#1e293b; padding: 12px 24px; }  
    main { max-width: 1280px; margin: 0 auto; padding: 20px 24px; }  
    .max-w-7xl { max-width: 1280px; margin: 0 auto; }  
    .flex { display: flex; }  
    .flex-wrap { flex-wrap: wrap; }  
    .items-center { align-items: center; }  
    .justify-between { justify-content: space-between; }  
    .gap-2 { gap: 8px; }  
    .gap-3 { gap: 12px; }  
    .gap-4 { gap: 16px; }  
    .gap-6 { gap: 24px; }  
    .grid { display: grid; }  
    .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }  
    .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }  
    .lg\\:col-span-4 { grid-column: span 4 / span 4; }  
    .lg\\:col-span-8 { grid-column: span 8 / span 8; }  
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }  
    .space-y-6 \> \* \+ \* { margin-top: 20px; }  
    .space-y-4 \> \* \+ \* { margin-top: 14px; }  
    .space-y-3 \> \* \+ \* { margin-top: 10px; }  
    .space-y-1\\.5 \> \* \+ \* { margin-top: 6px; }  
    .rounded-xl { border-radius: 12px; }  
    .rounded-lg { border-radius: 8px; }  
    .rounded { border-radius: 5px; }  
    .p-3 { padding: 12px; }  
    .p-4 { padding: 16px; }  
    .p-5 { padding: 20px; }  
    .px-3 { padding-left: 12px; padding-right: 12px; }  
    .py-2 { padding-top: 8px; padding-bottom: 8px; }  
    .py-2\\.5 { padding-top: 9px; padding-bottom: 9px; }  
    .mt-1 { margin-top: 4px; }  
    .mt-4 { margin-top: 16px; }  
    .mb-1 { margin-bottom: 4px; }  
    .mb-4 { margin-bottom: 16px; }  
    .pb-3 { padding-bottom: 12px; }  
    .w-full { width: 100%; }  
    .h-60 { height: 240px; }  
    .text-xs { font-size: 12px; line-height: 1.4; }  
    .text-sm { font-size: 14px; line-height: 1.4; }  
    .text-lg { font-size: 18px; line-height: 1.3; }  
    .text-xl { font-size: 21px; line-height: 1.25; }  
    .font-bold { font-weight: 700; }  
    .font-semibold { font-weight: 600; }  
    .uppercase { text-transform: uppercase; }  
    .text-right { text-align: right; }  
    .text-left { text-align: left; }  
    .text-white { color: \#ffffff; }  
    .text-slate-100 { color: \#f1f5f9; }  
    .text-slate-200 { color: \#e2e8f0; }  
    .text-slate-300 { color: \#cbd5e1; }  
    .text-slate-400 { color: \#94a3b8; }  
    .text-sky-300 { color: \#7dd3fc; }  
    .text-sky-400 { color: \#38bdf8; }  
    .text-emerald-300 { color: \#6ee7b7; }  
    .text-emerald-400 { color: \#34d399; }  
    .text-amber-300 { color: \#fcd34d; }  
    .text-amber-400 { color: \#fbbf24; }  
    .text-rose-300 { color: \#fda4af; }  
    .text-rose-400 { color: \#fb7185; }  
    .bg-slate-900 { background-color: \#0f172a; }  
    .bg-slate-900\\/70 { background-color: rgba(15, 23, 42, 0.75); }  
    .bg-slate-950\\/90 { background-color: rgba(2, 6, 23, 0.9); }  
    .bg-slate-800 { background-color: \#1e293b; }  
    .bg-sky-500 { background-color: \#0ea5e9; color: \#020617; }  
    .bg-sky-500\\/15 { background-color: rgba(14, 165, 233, 0.16); }  
    .bg-emerald-500\\/15 { background-color: rgba(16, 185, 129, 0.16); }  
    .bg-amber-500\\/15 { background-color: rgba(245, 158, 11, 0.16); }  
    .bg-rose-500\\/20 { background-color: rgba(244, 63, 94, 0.22); }  
    .border { border: 1px solid \#334155; }  
    .border-b { border-bottom: 1px solid \#1e293b; }  
    .border-slate-700 { border-color: \#334155; }  
    .border-slate-800 { border-color: \#1e293b; }  
    .hidden { display: none \!important; }  
    table { width: 100%; border-collapse: collapse; }  
    th, td { border-bottom: 1px solid rgba(30, 41, 59, 0.75); }  
    select, button, input\[type="range"\] { cursor: pointer; }  
    .mono { font-family: 'JetBrains Mono', monospace; }  
    .cockpit-card {  
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(9, 14, 28, 0.96) 100%);  
      border: 1px solid rgba(56, 189, 248, 0.18);  
      box-shadow: 0 10px 30px \-10px rgba(0, 0, 0, 0.65);  
    }  
  \</style\>  
\</head\>  
\<body class="min-h-screen antialiased selection:bg-sky-500 selection:text-slate-950"\>  
  \<\!-- Top Header \--\>  
  \<header class="border-b border-slate-800/90 bg-slate-950/90 backdrop-blur sticky top-0 z-30"\>  
    \<div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3"\>  
      \<div class="flex items-center gap-3"\>  
        \<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 font-bold text-slate-950 mono text-sm"\>  
          RF  
        \</div\>  
        \<div\>  
          \<div class="flex items-center gap-2 flex-wrap"\>  
            \<h1 class="text-base sm:text-lg font-bold tracking-tight text-white"\>LinkSpaceForge Pro\</h1\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-400/30"\>v1.0.0\</span\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"\>ECSS-E-ST-50-05C \&amp; CCSDS 401.0-B\</span\>  
          \</div\>  
          \<p class="text-xs text-slate-400"\>Spacecraft RF Link Budget, Atmospheric Path Loss, Ground Station G/T \&amp; Eb/N0 Margin Studio\</p\>  
        \</div\>  
      \</div\>

      \<div class="flex items-center gap-2 flex-wrap"\>  
        \<label for="presetSelect" class="text-xs text-slate-400 mono"\>LINK PRESET:\</label\>  
        \<select id="presetSelect" class="bg-slate-900 border border-slate-700 text-slate-100 text-xs rounded-lg px-3 py-2 mono focus:outline-none focus:border-sky-400"\>  
          \<option value="leo\_s\_band\_ttc"\>LEO S-Band TT\&amp;C Downlink (2250 MHz, 2 Mbps, KSAT 7.3m)\</option\>  
          \<option value="leo\_x\_band\_payload\_downlink"\>LEO X-Band Payload Downlink (8200 MHz, 150 Mbps, 11.2m)\</option\>  
          \<option value="geo\_ka\_band\_feeder\_link"\>GEO Ka-Band Gateway Downlink (26.5 GHz, 650 Mbps, 9.0m)\</option\>  
        \</select\>  
        \<button id="injectFadeBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 transition"\>  
          Inject Rain Fade (+6 dB)  
        \</button\>  
        \<button id="resetLinkBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"\>  
          Reset Link  
        \</button\>  
        \<button id="exportXmlBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition"\>  
          Export ECSS XML  
        \</button\>  
      \</div\>  
    \</div\>  
  \</header\>

  \<main class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6"\>  
    \<\!-- Toast Banner \--\>  
    \<div id="statusToast" class="hidden rounded-lg px-4 py-2.5 text-xs mono border bg-sky-950/80 border-sky-500/40 text-sky-200 flex items-center justify-between"\>  
      \<span id="statusToastText"\>RF link parameters nominal.\</span\>  
      \<button id="closeToastBtn" type="button" class="text-slate-400 hover:text-white ml-4"\>DISMISS\</button\>  
    \</div\>

    \<\!-- Top KPI Ribbon \--\>  
    \<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Link Margin\</div\>  
        \<div id="kpiLinkMargin" class="text-xl font-bold text-emerald-400 mono mt-1"\>+10.22 dB\</div\>  
        \<div id="kpiMinMargin" class="text-xs text-slate-300 mono mt-1"\>Min Threshold: \+3.0 dB\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Spacecraft EIRP\</div\>  
        \<div id="kpiEirp" class="text-xl font-bold text-white mono mt-1"\>+5.28 dBW\</div\>  
        \<div id="kpiTxPower" class="text-xs text-slate-300 mono mt-1"\>2.50 W RF (+4.0 dBW)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Propagation Loss\</div\>  
        \<div id="kpiTotalLoss" class="text-xl font-bold text-sky-300 mono mt-1"\>168.74 dB\</div\>  
        \<div id="kpiFspl" class="text-xs text-slate-300 mono mt-1"\>FSPL: 166.14 dB (2150 km)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Ground Station G/T\</div\>  
        \<div id="kpiGOverT" class="text-xl font-bold text-emerald-400 mono mt-1"\>+20.88 dB/K\</div\>  
        \<div id="kpiTSys" class="text-xs text-slate-300 mono mt-1"\>T\_sys: 164.7 K (7.3m dish)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>ECSS-E-ST-50-05C Audit\</div\>  
        \<div id="kpiAuditScore" class="text-xl font-bold text-emerald-400 mono mt-1"\>10 / 10 PASS\</div\>  
        \<div id="kpiAuditBadge" class="text-xs text-emerald-300 mono mt-1"\>ECSS-E-ST-50-05C CERTIFIED\</div\>  
      \</div\>  
    \</section\>

    \<\!-- Main Grid: Left Controls \+ Right Power Waterfall Plot \--\>  
    \<div class="grid grid-cols-1 lg:grid-cols-12 gap-6"\>  
      \<\!-- Parametric Controls \--\>  
      \<section class="lg:col-span-4 cockpit-card rounded-xl p-5 space-y-4"\>  
        \<div class="flex items-center justify-between border-b border-slate-800 pb-3"\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>1. RF Link Parameters\</h2\>  
          \<span class="text-xs mono text-sky-400"\>Clause 4 / 5\</span\>  
        \</div\>

        \<div class="space-y-3 text-xs"\>  
          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="freqInput" class="text-slate-300"\>Carrier Frequency (GHz)\</label\>  
              \<span id="freqVal" class="mono text-sky-300"\>2.250 GHz\</span\>  
            \</div\>  
            \<input id="freqInput" type="range" min="2.0" max="30.0" step="0.05" value="2.25" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="rateInput" class="text-slate-300"\>User Data Rate (Mbps)\</label\>  
              \<span id="rateVal" class="mono text-sky-300"\>2.0 Mbps\</span\>  
            \</div\>  
            \<input id="rateInput" type="range" min="0.1" max="800.0" step="0.5" value="2.0" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="rangeInput" class="text-slate-300"\>Max Slant Range (km)\</label\>  
              \<span id="rangeVal" class="mono text-sky-300"\>2150 km\</span\>  
            \</div\>  
            \<input id="rangeInput" type="range" min="400" max="42000" step="100" value="2150" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="powerInput" class="text-slate-300"\>Transmitter RF Output Power (W)\</label\>  
              \<span id="powerVal" class="mono text-sky-300"\>2.5 W\</span\>  
            \</div\>  
            \<input id="powerInput" type="range" min="0.2" max="60.0" step="0.2" value="2.5" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="txGainInput" class="text-slate-300"\>Spacecraft Antenna Gain (dBi)\</label\>  
              \<span id="txGainVal" class="mono text-sky-300"\>2.5 dBi\</span\>  
            \</div\>  
            \<input id="txGainInput" type="range" min="-2.0" max="48.0" step="0.5" value="2.5" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="dishDiamInput" class="text-slate-300"\>Ground Station Dish Diameter (m)\</label\>  
              \<span id="dishDiamVal" class="mono text-sky-300"\>7.3 m\</span\>  
            \</div\>  
            \<input id="dishDiamInput" type="range" min="2.0" max="15.0" step="0.1" value="7.3" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="rainLossInput" class="text-slate-300"\>Rain \&amp; Cloud Attenuation (dB)\</label\>  
              \<span id="rainLossVal" class="mono text-sky-300"\>0.10 dB\</span\>  
            \</div\>  
            \<input id="rainLossInput" type="range" min="0.0" max="14.0" step="0.1" value="0.1" class="w-full accent-sky-400" /\>  
          \</div\>  
        \</div\>  
      \</section\>

      \<\!-- Right Column: RF Power Flow Waterfall Plot & Subcards \--\>  
      \<section class="lg:col-span-8 space-y-6"\>  
        \<div class="cockpit-card rounded-xl p-5"\>  
          \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
            \<div\>  
              \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>2. RF Power Flow Waterfall \&amp; Energy-per-Bit (Eb/N0) Envelope\</h2\>  
              \<p class="text-xs text-slate-400"\>Stepwise dB power transition from transmitter PA output to receiver baseband detector\</p\>  
            \</div\>  
            \<div class="flex items-center gap-4 text-xs mono"\>  
              \<span class="flex items-center gap-1.5 text-sky-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"\>\</span\>RF Power Flow\</span\>  
              \<span class="flex items-center gap-1.5 text-emerald-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"\>\</span\>Received Eb/N0\</span\>  
            \</div\>  
          \</div\>

          \<div class="w-full overflow-hidden rounded-lg bg-slate-950/90 border border-slate-800/80 p-3"\>  
            \<svg id="rfLinkPlotSvg" viewBox="0 0 760 250" class="w-full h-60"\>\</svg\>  
          \</div\>

          \<\!-- Subcards \--\>  
          \<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs mono"\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>CARRIER POWER \&amp; LOSSES\</div\>  
              \<div class="flex justify-between"\>\<span\>EIRP (Spacecraft):\</span\>\<span id="detailEirp" class="text-white"\>+5.28 dBW\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>FSPL:\</span\>\<span id="detailFspl" class="text-white"\>166.14 dB\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Atm \+ Rain Loss:\</span\>\<span id="detailAtmRain" class="text-white"\>0.25 dB\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Total Prop Loss:\</span\>\<span id="detailTotalLoss" class="text-sky-300"\>168.74 dB\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>RECEIVER SENSITIVITY\</div\>  
              \<div class="flex justify-between"\>\<span\>Dish Gain G\_rx:\</span\>\<span id="detailRxGain" class="text-white"\>42.45 dBi\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>T\_sys (Ant+LNA+Feed):\</span\>\<span id="detailTSys" class="text-white"\>164.7 K\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Figure of Merit G/T:\</span\>\<span id="detailGOverT" class="text-emerald-300"\>+20.88 dB/K\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>C/N0 Spectral Density:\</span\>\<span id="detailCN0" class="text-sky-300"\>86.02 dB-Hz\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>EB/N0 \&amp; LINK MARGIN\</div\>  
              \<div class="flex justify-between"\>\<span\>Received Eb/N0:\</span\>\<span id="detailRecEbN0" class="text-white"\>14.92 dB\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Required Eb/N0:\</span\>\<span id="detailReqEbN0" class="text-white"\>3.20 dB\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Implementation Loss:\</span\>\<span id="detailImplLoss" class="text-white"\>1.50 dB\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Net Link Margin:\</span\>\<span id="detailMargin" class="text-emerald-300"\>+10.22 dB\</span\>\</div\>  
            \</div\>  
          \</div\>  
        \</div\>  
      \</section\>  
    \</div\>

    \<\!-- Section 3: Link Budget Stepwise Calculation Table \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>3. ECSS-E-ST-50-05C Stepwise RF Link Budget Breakdown\</h2\>  
          \<p class="text-xs text-slate-400"\>Exhaustive accounting from transmitter RF power, space loss, and receiver G/T down to demodulator threshold\</p\>  
        \</div\>  
        \<span id="marginSummaryBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          LINK MARGIN NOMINAL (+10.22 dB)  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Parameter Description\</th\>  
              \<th class="py-2.5 px-3"\>Symbol\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Value\</th\>  
              \<th class="py-2.5 px-3"\>Unit\</th\>  
              \<th class="py-2.5 px-3"\>Reference Standard / Notes\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="linkTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- Section 4: 10-Point Normative Auditor \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>4. 10-Point ECSS-E-ST-50-05C Rev. 2 \&amp; CCSDS 401.0-B Normative Auditor\</h2\>  
          \<p class="text-xs text-slate-400"\>Automated verification across link margins (nominal \&ge; 3.0 dB, critical \&ge; 6.0 dB), C/N0 carrier lock, ITU-R rain fade, and FEC coding gain\</p\>  
        \</div\>  
        \<span id="auditHeaderBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          10 / 10 RULES VERIFIED (100%)  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Rule ID\</th\>  
              \<th class="py-2.5 px-3"\>Standard Clause\</th\>  
              \<th class="py-2.5 px-3"\>Verification Requirement\</th\>  
              \<th class="py-2.5 px-3"\>Measured Telemetry\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Verdict\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="auditTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- XML Manifest Modal \--\>  
    \<section id="xmlModal" class="hidden cockpit-card rounded-xl p-5 border border-sky-500/40"\>  
      \<div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3"\>  
        \<h3 class="text-sm font-semibold text-white mono"\>ECSS-E-ST-50-05C RF Link Manifest (XML Export)\</h3\>  
        \<div class="flex items-center gap-2"\>  
          \<button id="copyXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400"\>  
            Copy XML  
          \</button\>  
          \<button id="closeXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"\>  
            Close  
          \</button\>  
        \</div\>  
      \</div\>  
      \<pre id="xmlOutputPre" class="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs mono text-sky-300 overflow-x-auto max-h-80"\>\</pre\>  
    \</section\>  
  \</main\>

  \<script\>  
    const SPEED\_OF\_LIGHT \= 299792458.0;  
    const BOLTZMANN\_K\_DBW \= \-228.599;  
    const T\_REF\_K \= 290.0;

    const MISSION\_PRESETS \= {  
      leo\_s\_band\_ttc: {  
        id: "leo\_s\_band\_ttc",  
        name: "LEO SSO SmallSat S-Band TT\&C Downlink (2250 MHz, KSAT 7.3m Ground Station)",  
        criticalPhase: false,  
        carrierFrequencyHz: 2.250e9,  
        dataRateBps: 2.0e6,  
        maxSlantRangeKm: 2150.0,  
        txPowerWatts: 2.5,  
        txFeederLossDb: 1.2,  
        txAntennaGainDbi: 2.5,  
        txPointingLossDb: 0.8,  
        rxAntennaDiameterM: 7.3,  
        rxAntennaEfficiency: 0.60,  
        rxLnaNoiseTempK: 85.0,  
        rxAntennaNoiseTempK: 45.0,  
        rxFeederLossDb: 0.5,  
        polarizationMismatchLossDb: 0.3,  
        atmosphericGasLossDb: 0.15,  
        rainCloudLossDb: 0.10,  
        requiredEbN0Db: 3.2,  
        implementationLossDb: 1.5  
      },  
      leo\_x\_band\_payload\_downlink: {  
        id: "leo\_x\_band\_payload\_downlink",  
        name: "LEO High-Resolution Optical Earth Obs X-Band Direct Downlink (8200 MHz, 150 Mbps)",  
        criticalPhase: false,  
        carrierFrequencyHz: 8.200e9,  
        dataRateBps: 150.0e6,  
        maxSlantRangeKm: 1980.0,  
        txPowerWatts: 8.0,  
        txFeederLossDb: 1.5,  
        txAntennaGainDbi: 16.5,  
        txPointingLossDb: 0.5,  
        rxAntennaDiameterM: 11.2,  
        rxAntennaEfficiency: 0.62,  
        rxLnaNoiseTempK: 75.0,  
        rxAntennaNoiseTempK: 55.0,  
        rxFeederLossDb: 0.4,  
        polarizationMismatchLossDb: 0.2,  
        atmosphericGasLossDb: 0.45,  
        rainCloudLossDb: 1.20,  
        requiredEbN0Db: 4.2,  
        implementationLossDb: 1.8  
      },  
      geo\_ka\_band\_feeder\_link: {  
        id: "geo\_ka\_band\_feeder\_link",  
        name: "GEO High-Throughput Satellite Ka-Band Gateway Downlink (26.5 GHz, 650 Mbps)",  
        criticalPhase: false,  
        carrierFrequencyHz: 26.500e9,  
        dataRateBps: 650.0e6,  
        maxSlantRangeKm: 38200.0,  
        txPowerWatts: 45.0,  
        txFeederLossDb: 2.0,  
        txAntennaGainDbi: 44.0,  
        txPointingLossDb: 0.6,  
        rxAntennaDiameterM: 9.0,  
        rxAntennaEfficiency: 0.65,  
        rxLnaNoiseTempK: 110.0,  
        rxAntennaNoiseTempK: 95.0,  
        rxFeederLossDb: 0.6,  
        polarizationMismatchLossDb: 0.4,  
        atmosphericGasLossDb: 0.85,  
        rainCloudLossDb: 3.80,  
        requiredEbN0Db: 7.5,  
        implementationLossDb: 2.2  
      }  
    };

    let currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS.leo\_s\_band\_ttc));

    function showToast(msg) {  
      const t \= document.getElementById("statusToast");  
      document.getElementById("statusToastText").textContent \= msg;  
      t.classList.remove("hidden");  
    }

    function renderPlot(res) {  
      const svg \= document.getElementById("rfLinkPlotSvg");  
      const w \= 760, h \= 250, padL \= 48, padR \= 45, padT \= 22, padB \= 32;  
      const plotW \= 430;  
      const plotH \= h \- padT \- padB;

      // Waterfall power transitions: P\_tx (dBW) \-\> EIRP (+5) \-\> PathLoss (-168) \-\> P\_rx (-163) \-\> C/N0 (+86) \-\> Eb/N0 (+15)  
      const stages \= \[  
        { label: "P\_tx", db: res.txPowerDbw, yRel: 0.8 },  
        { label: "EIRP", db: res.eirpDbw, yRel: 0.85 },  
        { label: "Rx In", db: res.eirpDbw \- res.totalPropagationLossDb \+ res.rxAntennaGainDbi, yRel: 0.2 },  
        { label: "C/N0", db: res.cOverN0DbHz \- 100.0, yRel: 0.6 },  
        { label: "Eb/N0", db: res.receivedEbN0Db, yRel: 0.55 },  
        { label: "Req+M", db: res.netRequiredEbN0Db \+ res.minRequiredMarginDb, yRel: 0.4 }  
      \];

      const pts \= stages.map((s, idx) \=\> {  
        const x \= padL \+ (idx / (stages.length \- 1)) \* plotW;  
        const y \= padT \+ plotH \* (1.0 \- s.yRel);  
        return \`\${x.toFixed(1)},\${y.toFixed(1)}\`;  
      });

      // Right half: Margin bar  
      const barStartX \= padL \+ plotW \+ 38;  
      const barMaxW \= w \- barStartX \- 24;  
      const marginClamped \= Math.max(0, Math.min(20.0, res.linkMarginDb));  
      const bw \= (marginClamped / 20.0) \* (barMaxW \- 55);  
      const marginCol \= res.marginCompliant ? "\#34d399" : "\#fb7185";

      svg.innerHTML \= \`  
        \<rect x="\${padL}" y="\${padT}" width="\${plotW}" height="\${plotH}" fill="rgba(15, 23, 42, 0.55)" /\>  
        \<polyline fill="none" stroke="\#38bdf8" stroke-width="2.5" points="\${pts.join(" ")}" /\>  
        \${stages.map((s, idx) \=\> {  
          const x \= padL \+ (idx / (stages.length \- 1)) \* plotW;  
          const y \= padT \+ plotH \* (1.0 \- s.yRel);  
          return \`  
            \<circle cx="\${x.toFixed(1)}" cy="\${y.toFixed(1)}" r="4" fill="\#38bdf8" /\>  
            \<text x="\${x \- 12}" y="\${y \- 8}" fill="\#94a3b8" font-size="9" font-family="JetBrains Mono"\>\${s.label}\</text\>  
          \`;  
        }).join("")}  
        \<text x="\${padL}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>Transmitter Chain\</text\>  
        \<text x="\${padL \+ plotW \- 95}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>Baseband Detector\</text\>  
        \<text x="\${barStartX}" y="\${padT \+ 14}" fill="\#cbd5e1" font-size="11" font-weight="bold" font-family="JetBrains Mono"\>LINK MARGIN (dB)\</text\>  
        \<text x="\${barStartX}" y="\${padT \+ 42}" fill="\${marginCol}" font-size="18" font-weight="bold" font-family="JetBrains Mono"\>\${res.linkMarginDb \>= 0 ? "+" : ""}\${res.linkMarginDb} dB\</text\>  
        \<rect x="\${barStartX}" y="\${padT \+ 54}" width="\${Math.max(6, bw).toFixed(1)}" height="14" rx="4" fill="\${marginCol}" /\>  
        \<text x="\${barStartX}" y="\${padT \+ 84}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>Req: \+\${res.minRequiredMarginDb} dB (\${res.marginCompliant ? "PASS" : "FAIL"})\</text\>  
      \`;  
    }

    function updateStudio() {  
      const freqHz \= Number(currentConfig.carrierFrequencyHz);  
      const wavelengthM \= SPEED\_OF\_LIGHT / freqHz;  
      const dM \= Number(currentConfig.maxSlantRangeKm) \* 1000.0;

      const fsplDb \= 20.0 \* Math.log10((4.0 \* Math.PI \* dM) / wavelengthM);  
      const lAtm \= Number(currentConfig.atmosphericGasLossDb);  
      const lRain \= Number(currentConfig.rainCloudLossDb);  
      const lPol \= Number(currentConfig.polarizationMismatchLossDb);  
      const lPoint \= Number(currentConfig.txPointingLossDb);  
      const totalPropLoss \= fsplDb \+ lAtm \+ lRain \+ lPol \+ lPoint;

      const pTxW \= Number(currentConfig.txPowerWatts);  
      const pTxDbw \= 10.0 \* Math.log10(pTxW);  
      const lTxFeed \= Number(currentConfig.txFeederLossDb);  
      const gTxDbi \= Number(currentConfig.txAntennaGainDbi);  
      const eirpDbw \= pTxDbw \- lTxFeed \+ gTxDbi;

      const diamM \= Number(currentConfig.rxAntennaDiameterM);  
      const etaRx \= Number(currentConfig.rxAntennaEfficiency);  
      const gRxDbi \= 10.0 \* Math.log10(etaRx \* Math.pow((Math.PI \* diamM) / wavelengthM, 2));

      const tAnt \= Number(currentConfig.rxAntennaNoiseTempK);  
      const tLna \= Number(currentConfig.rxLnaNoiseTempK);  
      const lRxFeed \= Number(currentConfig.rxFeederLossDb);  
      const tFeed \= T\_REF\_K \* (Math.pow(10, lRxFeed / 10.0) \- 1.0);  
      const tSys \= tAnt \+ tLna \+ tFeed;  
      const gOverT \= gRxDbi \- 10.0 \* Math.log10(tSys);

      const cOverN0 \= eirpDbw \- totalPropLoss \+ gOverT \- BOLTZMANN\_K\_DBW;  
      const rBps \= Number(currentConfig.dataRateBps);  
      const recEbN0 \= cOverN0 \- 10.0 \* Math.log10(rBps);

      const reqEbN0 \= Number(currentConfig.requiredEbN0Db);  
      const implLoss \= Number(currentConfig.implementationLossDb);  
      const netReq \= reqEbN0 \+ implLoss;  
      const linkMargin \= recEbN0 \- netReq;

      const minMargin \= currentConfig.criticalPhase ? 6.0 : 3.0;  
      const compliant \= linkMargin \>= minMargin;

      const freqGhz \= freqHz / 1e9;  
      const freqOk \= (freqGhz \>= 2.0 && freqGhz \<= 2.3) \|\| (freqGhz \>= 8.0 && freqGhz \<= 8.5) \|\| (freqGhz \>= 25.5 && freqGhz \<= 27.5);

      const checks \= \[  
        { id: "ECSS-50-01", clause: "ECSS-E-ST-50-05C Cl. 5.2.1", req: "Nominal Space-to-Ground Telemetry Link Margin (\>= \+3.0 dB)", measured: \`+\${linkMargin.toFixed(2)} dB (Min: \+\${minMargin.toFixed(1)} dB)\`, passed: compliant },  
        { id: "ECSS-50-02", clause: "ECSS-E-ST-50-05C Cl. 5.2.2", req: "Critical LEOP / Safe-Mode Link Margin Policy (\>= \+6.0 dB)", measured: currentConfig.criticalPhase ? \`+\${linkMargin.toFixed(2)} dB (Req: \+6.0 dB)\` : "Nominal phase evaluated", passed: \!currentConfig.criticalPhase \|\| linkMargin \>= 6.0 },  
        { id: "ECSS-50-03", clause: "CCSDS 401.0-B-32 Cl. 2.1", req: "Standardized Spacecraft RF Band (S/X/Ka-Band)", measured: \`\${freqGhz.toFixed(3)} GHz (\${(wavelengthM \* 1000).toFixed(1)} mm)\`, passed: freqOk },  
        { id: "ECSS-50-04", clause: "ECSS-E-ST-50-05C Cl. 4.2", req: "Free Space Path Loss Physics Model (140 to 230 dB)", measured: \`FSPL \= \${fsplDb.toFixed(2)} dB (\${currentConfig.maxSlantRangeKm} km)\`, passed: fsplDb \> 140.0 && fsplDb \< 230.0 },  
        { id: "ECSS-50-05", clause: "ITU-R P.618 & P.676", req: "Atmospheric & Rain Attenuation Inclusion", measured: \`Atm: \${lAtm.toFixed(2)} dB, Rain: \${lRain.toFixed(2)} dB\`, passed: lAtm \> 0 && lRain \> 0 },  
        { id: "ECSS-50-06", clause: "CCSDS 401.0-B-32 Cl. 2.2", req: "Spacecraft EIRP Energy Budget Verification", measured: \`EIRP \= \${eirpDbw.toFixed(2)} dBW (\${pTxW.toFixed(1)} W RF)\`, passed: eirpDbw \> \-10.0 && pTxW \<= 100.0 },  
        { id: "ECSS-50-07", clause: "CCSDS 401.0-B-32 Cl. 2.3", req: "Ground Station Figure of Merit (G/T \>= 10 dB/K, T\_sys \< 300K)", measured: \`G/T \= \${gOverT.toFixed(2)} dB/K (T\_sys \= \${tSys.toFixed(1)} K)\`, passed: gOverT \>= 10.0 && tSys \< 300.0 },  
        { id: "ECSS-50-08", clause: "ECSS-E-ST-50-05C Cl. 5.3", req: "Carrier-to-Noise Spectral Density (C/N0 \>= 60.0 dB-Hz)", measured: \`C/N0 \= \${cOverN0.toFixed(2)} dB-Hz\`, passed: cOverN0 \>= 60.0 },  
        { id: "ECSS-50-09", clause: "ECSS-E-ST-50-05C Cl. 5.4", req: "Receiver Hardware Implementation Loss Allocation (\>= 1.0 dB)", measured: \`Implementation loss \= \${implLoss.toFixed(1)} dB\`, passed: implLoss \>= 1.0 },  
        { id: "ECSS-50-10", clause: "ECSS-E-ST-50-05C Cl. 5.5", req: "Energy per Bit (Eb/N0) Target Threshold & FEC Margin", measured: \`Received Eb/N0 \= \${recEbN0.toFixed(2)} dB vs Net Req \= \${netReq.toFixed(2)} dB\`, passed: recEbN0 \>= netReq }  
      \];

      const passCount \= checks.filter((c) \=\> c.passed).length;

      // Update KPI Ribbon  
      document.getElementById("kpiLinkMargin").textContent \= \`\${linkMargin \>= 0 ? "+" : ""}\${linkMargin.toFixed(2)} dB\`;  
      document.getElementById("kpiLinkMargin").className \= \`text-xl font-bold mono mt-1 \${compliant ? "text-emerald-400" : "text-rose-400"}\`;  
      document.getElementById("kpiMinMargin").textContent \= \`Min Threshold: \+\${minMargin.toFixed(1)} dB\`;  
      document.getElementById("kpiEirp").textContent \= \`\${eirpDbw \>= 0 ? "+" : ""}\${eirpDbw.toFixed(2)} dBW\`;  
      document.getElementById("kpiTxPower").textContent \= \`\${pTxW.toFixed(1)} W RF (+\${pTxDbw.toFixed(1)} dBW)\`;  
      document.getElementById("kpiTotalLoss").textContent \= \`\${totalPropLoss.toFixed(2)} dB\`;  
      document.getElementById("kpiFspl").textContent \= \`FSPL: \${fsplDb.toFixed(2)} dB (\${currentConfig.maxSlantRangeKm} km)\`;  
      document.getElementById("kpiGOverT").textContent \= \`+\${gOverT.toFixed(2)} dB/K\`;  
      document.getElementById("kpiTSys").textContent \= \`T\_sys: \${tSys.toFixed(1)} K (\${diamM}m dish)\`;

      document.getElementById("kpiAuditScore").textContent \= \`\${passCount} / 10 PASS\`;  
      document.getElementById("kpiAuditScore").className \= \`text-xl font-bold mono mt-1 \${passCount \=== 10 ? "text-emerald-400" : "text-amber-400"}\`;  
      document.getElementById("kpiAuditBadge").textContent \= passCount \=== 10 ? "ECSS-E-ST-50-05C CERTIFIED" : "LINK DEFICIT WARNING";

      // Subcards  
      document.getElementById("detailEirp").textContent \= \`\${eirpDbw \>= 0 ? "+" : ""}\${eirpDbw.toFixed(2)} dBW\`;  
      document.getElementById("detailFspl").textContent \= \`\${fsplDb.toFixed(2)} dB\`;  
      document.getElementById("detailAtmRain").textContent \= \`\${(lAtm \+ lRain).toFixed(2)} dB\`;  
      document.getElementById("detailTotalLoss").textContent \= \`\${totalPropLoss.toFixed(2)} dB\`;

      document.getElementById("detailRxGain").textContent \= \`\${gRxDbi.toFixed(2)} dBi\`;  
      document.getElementById("detailTSys").textContent \= \`\${tSys.toFixed(1)} K\`;  
      document.getElementById("detailGOverT").textContent \= \`+\${gOverT.toFixed(2)} dB/K\`;  
      document.getElementById("detailCN0").textContent \= \`\${cOverN0.toFixed(2)} dB-Hz\`;

      document.getElementById("detailRecEbN0").textContent \= \`\${recEbN0.toFixed(2)} dB\`;  
      document.getElementById("detailReqEbN0").textContent \= \`\${reqEbN0.toFixed(2)} dB\`;  
      document.getElementById("detailImplLoss").textContent \= \`\${implLoss.toFixed(2)} dB\`;  
      document.getElementById("detailMargin").textContent \= \`\${linkMargin \>= 0 ? "+" : ""}\${linkMargin.toFixed(2)} dB\`;

      renderPlot({  
        txPowerDbw: pTxDbw,  
        eirpDbw: eirpDbw,  
        totalPropagationLossDb: totalPropLoss,  
        rxAntennaGainDbi: gRxDbi,  
        cOverN0DbHz: cOverN0,  
        receivedEbN0Db: recEbN0,  
        netRequiredEbN0Db: netReq,  
        linkMarginDb: linkMargin,  
        minRequiredMarginDb: minMargin,  
        marginCompliant: compliant  
      });

      // Table Breakdown  
      const tableRows \= \[  
        \["Carrier Frequency", "f\_c", freqGhz.toFixed(3), "GHz", "Space-to-Earth Band Allocation"\],  
        \["Spacecraft RF Transmitter Power", "P\_tx", pTxW.toFixed(2), "W", \`Output power (+\${pTxDbw.toFixed(2)} dBW)\`\],  
        \["Spacecraft Feeder & Filter Loss", "L\_tx", lTxFeed.toFixed(2), "dB", "Passive RF front-end losses"\],  
        \["Spacecraft Antenna Gain", "G\_tx", gTxDbi.toFixed(2), "dBi", "Boresight transmit gain"\],  
        \["Equivalent Isotropically Radiated Power", "EIRP", eirpDbw.toFixed(2), "dBW", "P\_tx \- L\_tx \+ G\_tx"\],  
        \["Free Space Path Loss", "FSPL", fsplDb.toFixed(2), "dB", "20·log10(4πd/λ)"\],  
        \["Atmospheric Gas Absorption", "L\_atm", lAtm.toFixed(2), "dB", "ITU-R P.676 gaseous attenuation"\],  
        \["Rain & Cloud Attenuation", "L\_rain", lRain.toFixed(2), "dB", "ITU-R P.618 precipitation fade"\],  
        \["Polarization & Pointing Loss", "L\_pol+pt", (lPol \+ lPoint).toFixed(2), "dB", "Combined pointing & polarization loss"\],  
        \["Ground Station Antenna Gain", "G\_rx", gRxDbi.toFixed(2), "dBi", \`\${diamM}m dish @ η=\${etaRx}\`\],  
        \["Receiver System Noise Temperature", "T\_sys", tSys.toFixed(1), "K", "T\_ant \+ T\_LNA \+ T\_feed"\],  
        \["Ground Station Figure of Merit", "G/T", gOverT.toFixed(2), "dB/K", "G\_rx \- 10·log10(T\_sys)"\],  
        \["Received C/N0 Spectral Density", "C/N0", cOverN0.toFixed(2), "dB-Hz", "EIRP \- Loss \+ G/T \- kB"\],  
        \["User Information Data Rate", "R\_b", (rBps / 1e6).toFixed(2), "Mbps", \`\${rBps} bps\`\],  
        \["Received Energy per Bit", "Eb/N0", recEbN0.toFixed(2), "dB", "C/N0 \- 10·log10(R\_b)"\],  
        \["Required Energy per Bit", "Eb/N0\_req", reqEbN0.toFixed(2), "dB", "FEC decoding threshold"\],  
        \["Demodulator Implementation Loss", "L\_impl", implLoss.toFixed(2), "dB", "Hardware degradation allowance"\],  
        \["Net Link Margin", "Margin", linkMargin.toFixed(2), "dB", \`Excess above threshold (Req: ≥\${minMargin} dB)\`\]  
      \];

      document.getElementById("linkTableBody").innerHTML \= tableRows  
        .map((r) \=\> \`  
          \<tr class="hover:bg-slate-900/50"\>  
            \<td class="py-2.5 px-3 font-semibold text-slate-200"\>\${r\[0\]}\</td\>  
            \<td class="py-2.5 px-3 text-sky-300"\>\${r\[1\]}\</td\>  
            \<td class="py-2.5 px-3 text-right font-mono text-white"\>\${r\[2\]}\</td\>  
            \<td class="py-2.5 px-3 text-slate-400"\>\${r\[3\]}\</td\>  
            \<td class="py-2.5 px-3 text-slate-300"\>\${r\[4\]}\</td\>  
          \</tr\>  
        \`)  
        .join("");

      const badge \= document.getElementById("marginSummaryBadge");  
      badge.textContent \= \`LINK MARGIN \${linkMargin \>= 0 ? "+" : ""}\${linkMargin.toFixed(2)} dB (\${compliant ? "COMPLIANT" : "DEFICIT"})\`;  
      badge.className \= \`text-xs mono px-2.5 py-1 rounded \${compliant ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" : "bg-rose-500/20 text-rose-300 border border-rose-500/40"}\`;

      // Render Audit Table  
      const auditBadge \= document.getElementById("auditHeaderBadge");  
      auditBadge.textContent \= \`\${passCount} / 10 RULES VERIFIED (\${passCount \* 10}%)\`;  
      auditBadge.className \= \`text-xs mono px-2.5 py-1 rounded \${  
        passCount \=== 10  
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
          : "bg-amber-500/20 text-amber-300 border border-amber-500/40"  
      }\`;

      document.getElementById("auditTableBody").innerHTML \= checks  
        .map((c) \=\> \`  
          \<tr class="hover:bg-slate-900/50"\>  
            \<td class="py-2.5 px-3 font-semibold text-sky-300"\>\${c.id}\</td\>  
            \<td class="py-2.5 px-3 text-slate-400"\>\${c.clause}\</td\>  
            \<td class="py-2.5 px-3 text-slate-200"\>\${c.req}\</td\>  
            \<td class="py-2.5 px-3 text-slate-300"\>\${c.measured}\</td\>  
            \<td class="py-2.5 px-3 text-right"\>  
              \<span class="px-2 py-0.5 rounded \${  
                c.passed  
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
                  : "bg-rose-500/20 text-rose-300 border border-rose-500/30"  
              }"\>\${c.passed ? "PASS" : "FAIL"}\</span\>  
            \</td\>  
          \</tr\>  
        \`)  
        .join("");

      const xmlLines \= \[  
        \`\<?xml version="1.0" encoding="UTF-8"?\>\`,  
        \`\<ECSS\_RFLinkSystemManifest standard="ECSS-E-ST-50-05C-Rev.2" ccsdsStandard="CCSDS-401.0-B-32" version="1.0.0"\>\`,  
        \`  \<Mission name="\${currentConfig.name}" freqGhz="\${freqGhz.toFixed(3)}" dataRateMbps="\${(rBps / 1e6).toFixed(2)}" slantRangeKm="\${currentConfig.maxSlantRangeKm}" /\>\`,  
        \`  \<Transmitter powerW="\${pTxW.toFixed(2)}" eirpDbw="\${eirpDbw.toFixed(2)}" /\>\`,  
        \`  \<Propagation fsplDb="\${fsplDb.toFixed(2)}" totalLossDb="\${totalPropLoss.toFixed(2)}" /\>\`,  
        \`  \<GroundStation dishDiamM="\${diamM}" gOverT="\${gOverT.toFixed(2)}" tSysK="\${tSys.toFixed(1)}" /\>\`,  
        \`  \<LinkBudget cOverN0="\${cOverN0.toFixed(2)}" receivedEbN0="\${recEbN0.toFixed(2)}" netReqEbN0="\${netReq.toFixed(2)}" linkMarginDb="\${linkMargin.toFixed(2)}" /\>\`,  
        \`  \<NormativeAudit passCount="\${passCount}" totalChecks="10" certified="\${passCount \=== 10}" /\>\`,  
        \`\</ECSS\_RFLinkSystemManifest\>\`  
      \];  
      document.getElementById("xmlOutputPre").textContent \= xmlLines.join("\\n");  
    }

    function syncInputs() {  
      document.getElementById("freqInput").value \= currentConfig.carrierFrequencyHz / 1e9;  
      document.getElementById("freqVal").textContent \= \`\${(currentConfig.carrierFrequencyHz / 1e9).toFixed(3)} GHz\`;  
      document.getElementById("rateInput").value \= currentConfig.dataRateBps / 1e6;  
      document.getElementById("rateVal").textContent \= \`\${(currentConfig.dataRateBps / 1e6).toFixed(1)} Mbps\`;  
      document.getElementById("rangeInput").value \= currentConfig.maxSlantRangeKm;  
      document.getElementById("rangeVal").textContent \= \`\${currentConfig.maxSlantRangeKm} km\`;  
      document.getElementById("powerInput").value \= currentConfig.txPowerWatts;  
      document.getElementById("powerVal").textContent \= \`\${currentConfig.txPowerWatts} W\`;  
      document.getElementById("txGainInput").value \= currentConfig.txAntennaGainDbi;  
      document.getElementById("txGainVal").textContent \= \`\${currentConfig.txAntennaGainDbi} dBi\`;  
      document.getElementById("dishDiamInput").value \= currentConfig.rxAntennaDiameterM;  
      document.getElementById("dishDiamVal").textContent \= \`\${currentConfig.rxAntennaDiameterM} m\`;  
      document.getElementById("rainLossInput").value \= currentConfig.rainCloudLossDb;  
      document.getElementById("rainLossVal").textContent \= \`\${currentConfig.rainCloudLossDb} dB\`;  
    }

    window.addEventListener("DOMContentLoaded", () \=\> {  
      syncInputs();  
      updateStudio();

      document.getElementById("presetSelect").addEventListener("change", (e) \=\> {  
        const key \= e.target.value;  
        if (MISSION\_PRESETS\[key\]) {  
          currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
          syncInputs();  
          updateStudio();  
          showToast(\`Loaded link preset: \${currentConfig.name}\`);  
        }  
      });

      const bindSlider \= (id, valId, prop, unit, scale \= 1.0) \=\> {  
        const el \= document.getElementById(id);  
        el.addEventListener("input", () \=\> {  
          currentConfig\[prop\] \= Number(el.value) \* scale;  
          document.getElementById(valId).textContent \= \`\${el.value} \${unit}\`;  
          updateStudio();  
        });  
      };

      bindSlider("freqInput", "freqVal", "carrierFrequencyHz", "GHz", 1e9);  
      bindSlider("rateInput", "rateVal", "dataRateBps", "Mbps", 1e6);  
      bindSlider("rangeInput", "rangeVal", "maxSlantRangeKm", "km");  
      bindSlider("powerInput", "powerVal", "txPowerWatts", "W");  
      bindSlider("txGainInput", "txGainVal", "txAntennaGainDbi", "dBi");  
      bindSlider("dishDiamInput", "dishDiamVal", "rxAntennaDiameterM", "m");  
      bindSlider("rainLossInput", "rainLossVal", "rainCloudLossDb", "dB");

      document.getElementById("injectFadeBtn").addEventListener("click", () \=\> {  
        currentConfig.rainCloudLossDb \+= 6.0;  
        document.getElementById("rainLossInput").value \= currentConfig.rainCloudLossDb;  
        document.getElementById("rainLossVal").textContent \= \`\${currentConfig.rainCloudLossDb} dB\`;  
        updateStudio();  
        showToast("Injected \+6.0 dB heavy rain fade attenuation into propagation channel.");  
      });

      document.getElementById("resetLinkBtn").addEventListener("click", () \=\> {  
        const key \= document.getElementById("presetSelect").value;  
        currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
        syncInputs();  
        updateStudio();  
        showToast("All link parameters, antenna gains, and channel losses restored to nominal.");  
      });

      document.getElementById("exportXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.remove("hidden");  
      });

      document.getElementById("closeXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.add("hidden");  
      });

      document.getElementById("copyXmlBtn").addEventListener("click", () \=\> {  
        const xmlText \= document.getElementById("xmlOutputPre").textContent;  
        try {  
          if (navigator.clipboard && navigator.clipboard.writeText) {  
            navigator.clipboard.writeText(xmlText);  
          } else {  
            const ta \= document.createElement("textarea");  
            ta.value \= xmlText;  
            document.body.appendChild(ta);  
            ta.select();  
            document.execCommand("copy");  
            document.body.removeChild(ta);  
          }  
          showToast("ECSS-E-ST-50-05C XML Manifest copied to clipboard.");  
        } catch (err) {  
          showToast("XML Manifest ready in viewer.");  
        }  
      });

      document.getElementById("closeToastBtn").addEventListener("click", () \=\> {  
        document.getElementById("statusToast").classList.add("hidden");  
      });  
    });  
  \</script\>  
\</body\>  
\</html\>  
