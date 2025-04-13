const encodedChannelData = {
  willo2: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwcFBgZQWhAIEkJbXxwGVhVfVUkTDFZVE18JAxtYAhMXKWNidR5fDhVLWF5CAAwYBB5dAhwTRBcWVxIPGlMJBBcAAQZcQFYVEghBGFkHFxgRQxsGRlQCXRYBAFcFUF5TDwJSVAMCBV8FUgBTDhRRUQVFBEgRAllbXFsRAxcaR0V8NHp9UkhARF1GTRUHRVQOBEADBUsDBw9FV1IFVAYEXlsFBlRVCFJfUwQPURRIQxUEEQEEFFRVD0sEWQFXDwJXWVdSUwFQCwRSUABRBhNbUkUPSQ==",    
  Astro: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRMAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEABV0ZIU10UVxQLQWkIE0xIWkZTEx9GRSJken0XGkRFSBQcUFcEW0BTUQZTBAFfCVMOUA5XAwUCX1QCUhAAD1FHUlZCRQ0YUFUFXwFTA1YLUFUGVFIEVwFeV1UOEQcDA0ZSURNVUgwRFBwa",    
  deng: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwdVUUZbVRMGB1dWVxMCVgodRwMLAQVWQV4QD00ASVdaXwYGAQYGVAIDUgNUEwAPAUYNV0JSDlxDBAdSU1IDSV0LQxhUVx0REEhXXkBfAFMJXFoCBkhHXAobDw5BRAhIVA9BUxhSXw8CCEJEGRYCRA9dUQkRSFROA1JQAENbFB8XCUJCGEcCSVYFDlIFFAUBARNSUEZeVVkTUlYFVA5WBQEHAAUPUlBeSAVTWVVcDkcDUBhHUCNldTlTGBQXDEccGlACUw9XB1ZUU1QBAUQHUQVAB1ZFU1YKEA8FX1YCVwZdRA0WFVQGXwNSVA4BQwZRUBMBBEdSAAhDV1YEUA9XAV0CBQ4EE04b",    
  fc1: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwcFBgNQWhAIEkJSRh5OVkkTXwYfBl5QFhgPAkEZFA5WS1lfQ0NcSQsPQFIZEQ9eAhxAFF0DVksaGQQJVhkJAQwFUwVPAEcXSAlDQxkEUhhVQwNTRVFSCxADUQIBAlJWAVECBwABVQdRUVBRAxcCVEgRUQkRSVpIFhRNRxdyNSpzA05FFQsTHUUDVQMERAZTV0MDXhADAgFFUgBSBgZXXlpTBgUDUwdQU0QMFxRGBwZTQ1dXQ1JTAEYFVgQBVV9QXVQOVVFQCgNVUAEDAlAeSg==",    
  geo: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwpeQFICHRUPCUcZVR0OGRcZGwsbEVIXF1ISSHJTCDhrE0dTRR53JzQuGXBTHTxkEgJRFVwKR1xQGkFFcWQqLF0fRBQNEUhEUFACBlITAgIFE1cBEAUBCUsFVwQBBgZVCldUD1IGCwNFXBYVA0VQBQMWBlNAAQUAQQVZAgwGXgNbVgFVVQBSVwJTVwUUDx4=",    
  tencric: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwNTUVICHgsIBFpeQBdNThICRAQWCRlWF0JOA0dbSBRVD1sMQ1RdBRUPVVxTBgdFClxHChsLGFUTWAgBUEUTSVUWUxQbEREiNSt9Uk8BQQ1HCRZeSlAFXUYFWAEHBwFTWVQOD1RQUVRTX1UBA0dXUwYTB0VIRxUIEVIHBFNTVwMIAAZQVVQCVldTAwNVF1BSAUZXU0RRAhoPSw==",    
  fc2: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwcGAAFQWhAIEkJbXxwGVhVfVUkTDFZVE18JAxtYAhMXKWNidR5ADwlLWF5CAAwYCxtCAl0EW1EXWBUUGlIGFFBJUlhUHlQCDxwDWl4cGkJIHUETXREGFxRTVlUEAVYGWlQBDgNQUV4FX1NSBRdRUQERV14RAVEKXVUECVYYChdcRBsWFXVhKywDT0QUSENMRUMBXhNVVQwXBwVVUQEBVg5eDgRTAgYCXlUDVgQUAQRTUA5HUFcAAEIPWVMFUgNXXlMGBwUDAgUGUQ4DA0tSAVAWBQVBRUpF",    
  deng2: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFwcGAgJQWhAIEkJSRh5OVkkTXwYfBl5QFhgPAkEZFwNAS1lfQ0NcSQsPQFIZEQ9eAhxAFF0DVksaGQQJVhkJU1McRkJAUFseSAlDQxkEUhhVFAAGFwNUABEHAgQBVQReAV4PAg8IA19WVAZSUkUFBEgRUQkRSVpIFhRNRxdyNSpzA05FFQsTHUVeDwVVSlBSX0UEU0peBw0RUwVRDAECBFoEVgMDBFYDAkQMFxRFVFUESgUDSlcCD0NQUFIMUl9VDVEGBAIBV19eUgdUAlAeSg==",    
  Astro1: "HER7VlgbBVIUBmE1O0UNGFBeFRNFRV1IFxVDRFJQXgIIARhEXwYGGAYBQBUdSERMAFMAChtGDxcXCl5YUlBBDA4SRhpGHgJOBRNXDFwGREwAWU8EWltJCkFJU1dEWR4REUlaXlgXAkVIQAFXRkhTXRRXFAtBaQgTTEhaRlMTH0ZFImR6fRcaREVIFBxQVwRbQFNRBlMEAV8JUw5QDlcDBQJfVAJSEAAPUUdSVkJFDRhQVQVfAVMDVgtQVQZUUgRXAV5XVQ4RBwMDRlJRE1VSDBEUHBo=",    
  
};
