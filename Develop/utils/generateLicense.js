const fs = require(`fs/promises`)
const { questions } = require("../questions");

function renderLicenseBadge(response) {
  switch (response.license) {
    case 'None': {
      return ["", "!!!ERASE THIS SECTION!!!"];
    }
    case 'Apache': {
      return ["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "Apache"];
    }
    case 'Boost': {
     return ["[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "Boost"];
    }
    case 'BSD': {
      return ["[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "BSD"];
    }
    case 'Creative Commons': {
     return ["[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)", "Creative Commons"];
    }
    case 'Eclipse': {
      return ["[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", "Eclipse"];
    }
    case 'GNU': {
     return ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "GNU"];
    }
    case 'The Organization for Ethical Source': {
      return ["[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)", "The Organization for Ethical Source"];
    }
    case 'IBM': {
     return ["[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)", "IBM"];
    }
    case 'ISC': {
      return ["[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", "ISC"];
    }
    case 'MIT': {
     return ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "MIT"];
    }
    case 'Mozilla': {
      return ["[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "Mozilla"];
    }
    case 'Open Data Commons': {
     return ["[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)", "Open Data Commons"];
    }
    case 'Perl': {
      return ["[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", "Perl"];
    }
    case 'SIL': {
     return ["[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)", "SIL"];
    }
    case 'Unlicense': {
      return ["[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "Unlicense"];
    }
    case 'WTFPL': {
     return ["[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", "WTFPL"];
    }
    case 'Zlib': {
      return ["[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)", "Zlib"];
    }
  }
}

module.exports = {
   renderLicenseBadge
}
