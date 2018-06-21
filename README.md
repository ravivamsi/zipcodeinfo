# zipcodeinfo
Node Module to provide the details for the Global Countries and their Zip Codes



## Pre-requisites

Use the package manager section to install nodejs in different operating systems

https://nodejs.org/en/download/package-manager/

### Windows
```bash
> choco install nodejs
```

### Mac
```bash
$ brew install node
```

## Install English Dictionary Global
```bash
npm install zipcodeinfo -g
```

## Install English Dictionary Local
```bash
npm install zipcodeinfo
```

## Usage

Change Directory to the node_modules if you installed globally
```bash
cd /usr/local/lib/node_modules
```

> Note: For Windows
> Windows XP - %USERPROFILE%\Application Data\npm\node_modules
> Windows 7, 8 and 10 - %AppData%\npm\node_modules

## Usage

```bash
$ npm start US 38119
```
Sample Response
```json
{
    "post code": "38119",
    "country": "United States",
    "country abbreviation": "US",
    "places": [
        {
            "place name": "Memphis",
            "longitude": "-89.8501",
            "state": "Tennessee",
            "state abbreviation": "TN",
            "latitude": "35.0821"
        }
    ]
}
```


## Information

You can see more information about the countries and their zip code ranges from Github Wiki

https://github.com/ravivamsi/zipcodeinfo/wiki
