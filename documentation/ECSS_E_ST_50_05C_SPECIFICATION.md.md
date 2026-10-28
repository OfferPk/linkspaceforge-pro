# ECSS-E-ST-50-05C Rev. 2 & CCSDS 401.0-B-32 Engineering Specification

## 1\. Normative Scope & Reference Standards

**LinkSpaceForge Pro (v1.0.0)** implements the mathematical formulation, noise temperature cascading, and link margin verification requirements of:

- [**ECSS-E-ST-50-05C Rev. 2**](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-50-05C_Rev.16March2009.pdf) — *Space engineering: Radio frequency and modulation* (4 October 2011).  
- [**CCSDS 401.0-B-32**](https://ccsds.org/Pubs/401x0b32.pdf) — *Radio Frequency and Modulation Systems—Part 1: Earth Stations and Spacecraft* (October 2021).  
- **ITU-R P.676 & P.618** — *Attenuation by atmospheric gases and propagation data required for the design of Earth-space telecommunication systems*.

## 2\. Mathematical Formulation

### 2.1 Free Space Path Loss (FSPL) & Propagation Attenuation (Clause 4.2)

Given carrier frequency \$f\$ and maximum slant range \$d\$:

\$\$\\lambda \= \\frac{c}{f}, \\quad \\text{FSPL (dB)} \= 20\\log\_{10}\\left(\\frac{4\\pi d}{\\lambda}\\right)\$\$

\$\$L\_{\\text{prop}} \= \\text{FSPL} \+ L\_{\\text{atm}} \+ L\_{\\text{rain}} \+ L\_{\\text{pol}} \+ L\_{\\text{pointing}}\$\$

### 2.2 Spacecraft Equivalent Isotropically Radiated Power (EIRP)

\$\$\\text{EIRP (dBW)} \= P\_{\\text{tx}}\\text{ (dBW)} \- L\_{\\text{tx,feed}}\\text{ (dB)} \+ G\_{\\text{tx}}\\text{ (dBi)}\$\$

### 2.3 Ground Station Receiver Figure of Merit (\$G/T\$)

\$\$G\_{\\text{rx}}\\text{ (dBi)} \= 10\\log\_{10}\\left(\\eta\_{\\text{rx}} \\left(\\frac{\\pi D}{\\lambda}\\right)^2\\right)\$\$

\$\$T\_{\\text{sys}} \= T\_{\\text{ant}} \+ T\_{\\text{LNA}} \+ 290\\cdot\\left(10^{L\_{\\text{rx,feed}}/10} \- 1\\right), \\quad (G/T)\\text{ (dB/K)} \= G\_{\\text{rx}} \- 10\\log\_{10}(T\_{\\text{sys}})\$\$

### 2.4 Carrier-to-Noise Spectral Density (\$C/N\_0\$) & Energy per Bit (\$E\_b/N\_0\$)

\$\$C/N\_0\\text{ (dB-Hz)} \= \\text{EIRP} \- L\_{\\text{prop}} \+ (G/T) \- 10\\log\_{10}(k\_B) \\quad (k\_B \= \-228.60\\text{ dBW/Hz}\\cdot\\text{K})\$\$

\$\$E\_b/N\_0\\text{ (dB)} \= C/N\_0 \- 10\\log\_{10}(R\_b)\$\$

\$\$\\text{Link Margin (dB)} \= E\_b/N\_0\\text{ (received)} \- \\left(E\_b/N\_0\\text{ (required)} \+ L\_{\\text{implementation}}\\right)\$\$