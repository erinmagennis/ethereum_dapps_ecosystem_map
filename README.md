# Ethereum DApp Ecosystem Map

An interactive visualization of the Ethereum DApp ecosystem, showcasing applications across multiple categories.

## Live Previews

View the visualizations directly in your browser:

- [Full Ecosystem Map](https://htmlpreview.github.io/?https://github.com/erinmagennis/ethereum_dapps_ecosystem_map/blob/main/ethereum_dapp_ecosystem.html) - Interactive map with descriptions
- [Presentation Slide](https://htmlpreview.github.io/?https://github.com/erinmagennis/ethereum_dapps_ecosystem_map/blob/main/ethereum_dapp_ecosystem_slide.html) - Slide format with details ([Download PNG](https://github.com/erinmagennis/ethereum_dapps_ecosystem_map/raw/main/ethereum_dapp_ecosystem_slide.png))
- [Logos Only Slide](https://htmlpreview.github.io/?https://github.com/erinmagennis/ethereum_dapps_ecosystem_map/blob/main/ethereum_dapp_ecosystem_slide_logos_only.html) - Minimalist logo view ([Download PNG](https://github.com/erinmagennis/ethereum_dapps_ecosystem_map/raw/main/ethereum_dapp_ecosystem_slide_logos_only.png))

**PNG files are in 16:9 format (1920x1080) - perfect for presentations!**

## Overview

This project provides visual representations of Ethereum-based decentralized applications (DApps), organized by category. The visualizations are designed to be informative and presentation-ready, with multiple viewing options.

## Categories

The ecosystem map includes DApps from the following categories:

- **DeFi** - Decentralized Finance applications
- **Social** - Social networking and communication platforms
- **Privacy** - Privacy-focused applications
- **Collectibles** - NFT and digital collectible platforms
- **Gaming** - Blockchain-based games
- **DAO** - Decentralized Autonomous Organizations
- **Productivity** - Tools and utilities
- **Bridge** - Cross-chain bridging solutions

## Files

### Visualizations

- **`ethereum_dapp_ecosystem.html`** - Full interactive ecosystem map with descriptions
- **`ethereum_dapp_ecosystem_slide.html`** - Presentation-optimized slide format
- **`ethereum_dapp_ecosystem_slide_logos_only.html`** - Slide format showing only logos

### Data

- **`dapp_data.json`** - Structured data containing DApp information (name, URL, logo, description)
- **`ethereum_colors.svg`** - Ethereum brand colors reference

### Tools

- **`extract_dapp_data.py`** - Python script to extract DApp data from Excel source files

## Usage

### Viewing the Visualizations

Simply open any of the HTML files in a web browser:

```bash
open ethereum_dapp_ecosystem.html
```

The visualizations are self-contained and don't require a web server.

### Extracting Data

To update the data from a source Excel file:

1. Install required dependencies:
```bash
pip install openpyxl
```

2. Update the file path in `extract_dapp_data.py` to point to your Excel source

3. Run the extraction script:
```bash
python extract_dapp_data.py
```

This will generate an updated `dapp_data.json` file.

## Data Structure

The `dapp_data.json` file is organized by category, with each DApp containing:

```json
{
  "CategoryName": [
    {
      "name": "DApp Name",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png",
      "description": "Description of the DApp"
    }
  ]
}
```

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x and openpyxl (only for data extraction)

## License

This project is provided as-is for educational and informational purposes.

## Contributing

To add or update DApp information, modify the source data and regenerate the JSON file using the extraction script.

## Get Your Own Ecosystem Toolkit

Interested in similar ecosystem dashboards, analytics tools, or custom visualizations for your project? Reach out on Twitter [@erinmagennis](https://twitter.com/erinmagennis) to discuss building custom tooling for grants tracking, portfolio management, automated reporting, and more.
