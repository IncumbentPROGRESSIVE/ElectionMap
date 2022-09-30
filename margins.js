const margins = {
    "AK-At-Large": -0.01,
    "AL-1": 0.96,
    "AL-2": 0.36,
    "AL-3": 0.41,
    "AL-4": 0.65,
    "AL-5": 0.34,
    "AL-6": 0.96,
    "AL-7": -0.23,
    "AR-1": 0.45,
    "AR-2": 0.2,
    "AR-3": 0.31,
    "AR-4": 0.41,
    "AZ-1": 0.09,
    "AZ-2": 0.06,
    "AZ-3": -0.44,
    "AZ-4": -0.02,
    "AZ-5": 0.29,
    "AZ-6": 0.11,
    "AZ-7": -0.23,
    "AZ-8": 1,
    "AZ-9": 1,
    "CA-1": 0.28,
    "CA-10": -0.74,
    "CA-11": -0.64,
    "CA-12": -0.72,
    "CA-13": -0.01,
    "CA-14": -0.37,
    "CA-15": -1,
    "CA-16": -1,
    "CA-17": -0.42,
    "CA-18": -0.36,
    "CA-19": -0.32,
    "CA-2": -0.41,
    "CA-20": 0.35,
    "CA-21": -0.12,
    "CA-22": -0.04,
    "CA-23": 0.19,
    "CA-24": -0.22,
    "CA-25": -0.08,
    "CA-26": -0.08,
    "CA-27": -0.01,
    "CA-28": -0.28,
    "CA-29": -100,
    "CA-3": 0.12,
    "CA-30": -1,
    "CA-31": -0.24,
    "CA-32": -0.34,
    "CA-33": -0.18,
    "CA-34": -1,
    "CA-35": -0.19,
    "CA-36": -0.36,
    "CA-37": -1,
    "CA-38": -0.21,
    "CA-39": -0.16,
    "CA-4": -0.3,
    "CA-40": 0.13,
    "CA-41": 0.08,
    "CA-42": -0.37,
    "CA-43": -0.56,
    "CA-44": -0.43,
    "CA-45": 0.03,
    "CA-46": -0.23,
    "CA-47": -0.02,
    "CA-48": 0.23,
    "CA-49": -0.01,
    "CA-5": 0.2,
    "CA-50": -0.23,
    "CA-51": -0.18,
    "CA-52": -0.32,
    "CA-6": -0.11,
    "CA-7": -0.32,
    "CA-8": -0.47,
    "CA-9": -0.02,
    "CO-1": -0.47,
    "CO-2": -0.29,
    "CO-3": 0.14,
    "CO-4": 0.28,
    "CO-5": 0.25,
    "CO-6": -0.11,
    "CO-7": -0.02,
    "CO-8": 0.07,
    "CT-1": -0.15,
    "CT-2": 0.005,
    "CT-3": -0.07,
    "CT-4": -0.17,
    "CT-5": -0.02,
    "DE-At-Large": -0.09,
    "FL-1": 0.28,
    "FL-10": -0.26,
    "FL-11": 0.22,
    "FL-12": 0.4,
    "FL-13": 0.11,
    "FL-14": -0.09,
    "FL-15": 0.09,
    "FL-16": 0.16,
    "FL-17": 0.25,
    "FL-18": 0.96,
    "FL-19": 0.28,
    "FL-2": 0.13,
    "FL-20": -0.41,
    "FL-21": 0.17,
    "FL-22": -0.09,
    "FL-23": -0.11,
    "FL-24": -0.51,
    "FL-25": -0.2,
    "FL-26": 0.17,
    "FL-27": 0.04,
    "FL-28": 0.11,
    "FL-3": 0.18,
    "FL-4": 0.13,
    "FL-5": 1,
    "FL-6": 0.96,
    "FL-7": 0.17,
    "FL-8": 0.26,
    "FL-9": -0.11,
    "GA-1": 0.23,
    "GA-2": 0.01,
    "GA-3": 0.44,
    "GA-4": -0.44,
    "GA-5": -0.54,
    "GA-6": 0.34,
    "GA-7": -0.09,
    "GA-8": 0.4,
    "GA-9": 0.47,
    "GA-10": 0.37,
    "GA-11": 0.33,
    "GA-12": 0.22,
    "GA-13": -0.49,
    "GA-14": 0.47,
    "HI-1": -0.26,
    "HI-2": -0.26,
    "IA-1": 0.05,
    "IA-2": 0.05,
    "IA-3": 0.04,
    "IA-4": 0.33,
    "ID-1": 0.55,
    "ID-2": 0.28,
    "IL-1": -0.34,
    "IL-10": -0.17,
    "IL-11": -0.05,
    "IL-12": 0.47,
    "IL-13": -0.02,
    "IL-14": -0.02,
    "IL-15": 0.18,
    "IL-16": 0.29,
    "IL-17": -0.04,
    "IL-2": -0.3,
    "IL-3": -0.32,
    "IL-4": -0.41,
    "IL-5": -0.29,
    "IL-6": -0.01,
    "IL-7": -1,
    "IL-8": -0.07,
    "IL-9": -0.37,
    "IN-1": -0.05,
    "IN-2": 0.36,
    "IN-3": 0.38,
    "IN-4": 0.35,
    "IN-5": 0.25,
    "IN-6": 0.46,
    "IN-7": -0.3,
    "IN-8": 0.38,
    "IN-9": 0.36,
    "KS-1": 0.36,
    "KS-2": 0.24,
    "KS-3": 0.013,
    "KS-4": 0.29,
    "KY-1": 0.44,
    "KY-2": 0.4,
    "KY-3": -0.14,
    "KY-4": 0.36,
    "KY-5": 0.6,
    "KY-6": 0.16,
    "LA-1": 0.42,
    "LA-2": -0.48,
    "LA-3": 0.44,
    "LA-4": 1,
    "LA-5": 0.36,
    "LA-6": 0.96,
    "MA-1": -0.25,
    "MA-2": -0.29,
    "MA-3": -0.25,
    "MA-4": -0.22,
    "MA-5": -0.42,
    "MA-6": -0.2,
    "MA-7": -0.69,
    "MA-8": -0.27,
    "MA-9": -0.12,
    "MD-1": 0.28,
    "MD-2": -0.06,
    "MD-3": -0.09,
    "MD-4": -0.72,
    "MD-5": -0.28,
    "MD-6": 0.03,
    "MD-7": -0.47,
    "MD-8": -0.54,
    "ME-1": -0.19,
    "ME-2": 0.04,
    "MI-1": 0.26,
    "MI-10": 0.06,
    "MI-11": -0.16,
    "MI-12": -0.42,
    "MI-13": -0.39,
    "MI-2": 0.33,
    "MI-3": -0.04,
    "MI-4": 0.13,
    "MI-5": 0.3,
    "MI-6": -0.15,
    "MI-7": -0.03,
    "MI-8": 0.02,
    "MI-9": 0.36,
    "MN-1": 0.11,
    "MN-2": 0.004,
    "MN-3": -0.15,
    "MN-4": -0.26,
    "MN-5": -0.58,
    "MN-6": 0.26,
    "MN-7": 0.39,
    "MN-8": 0.16,
    "MO-1": -0.52,
    "MO-2": 0.18,
    "MO-3": 0.38,
    "MO-4": 0.47,
    "MO-5": -0.15,
    "MO-6": 0.44,
    "MO-7": 0.49,
    "MO-8": 0.61,
    "MS-1": 0.4,
    "MS-2": -0.17,
    "MS-3": 0.3,
    "MS-4": 0.43,
    "MT-1": 0.11,
    "MT-2": 0.35,
    "NC-1": -0.06,
    "NC-10": 0.49,
    "NC-11": 0.14,
    "NC-12": -0.19,
    "NC-13": 0.05,
    "NC-14": -0.06,
    "NC-2": -0.18,
    "NC-3": 0.33,
    "NC-4": -0.29,
    "NC-5": 0.27,
    "NC-6": -0.07,
    "NC-7": 0.19,
    "NC-8": 0.4,
    "NC-9": 0.14,
    "ND-At-Large": 0.39,
    "NE-1": 0.2,
    "NE-2": 0.08,
    "NE-3": 0.58,
    "NH-1": 0.002,
    "NH-2": -0.03,
    "NJ-1": -0.17,
    "NJ-10": -0.61,
    "NJ-11": -0.07,
    "NJ-12": -0.33,
    "NJ-2": 0.13,
    "NJ-3": -0.05,
    "NJ-4": 0.31,
    "NJ-5": -0.02,
    "NJ-6": -0.09,
    "NJ-7": 0.06,
    "NJ-8": -0.43,
    "NJ-9": -0.16,
    "NM-1": -0.06,
    "NM-2": 0.01,
    "NM-3": -0.07,
    "NV-1": -0.02,
    "NV-2": 0.14,
    "NV-3": 0.01,
    "NV-4": -0.01,
    "NY-1": 0.09,
    "NY-10": -0.6,
    "NY-11": 0.1,
    "NY-12": -0.59,
    "NY-13": -1,
    "NY-14": -0.49,
    "NY-15": -0.62,
    "NY-16": -0.33,
    "NY-17": -0.05,
    "NY-18": 0.014,
    "NY-19": 0.03,
    "NY-2": 0.06,
    "NY-20": -0.09,
    "NY-21": 0.2,
    "NY-22": 0.02,
    "NY-23": 0.26,
    "NY-24": 0.25,
    "NY-25": -0.08,
    "NY-26": -0.13,
    "NY-3": 0.002,
    "NY-4": -0.05,
    "NY-5": -0.54,
    "NY-6": -0.25,
    "NY-7": -0.54,
    "NY-8": -0.44,
    "NY-9": -0.43,
    "OH-1": 0.04,
    "OH-2": 0.54,
    "OH-3": -0.29,
    "OH-4": 0.41,
    "OH-5": 0.32,
    "OH-6": 0.32,
    "OH-7": 0.26,
    "OH-8": 0.29,
    "OH-9": -0.03,
    "OH-10": 0.12,
    "OH-11": -0.41,
    "OH-12": 0.36,
    "OH-13": 0.05,
    "OH-14": 0.22,
    "OH-15": 0.3,
    "OK-1": 0.32,
    "OK-2": 0.56,
    "OK-3": 0.48,
    "OK-4": 0.37,
    "OK-5": 0.27,
    "OR-1": -0.27,
    "OR-2": 0.16,
    "OR-3": -0.46,
    "OR-4": -0.04,
    "OR-5": 0.001,
    "OR-6": -0.01,
    "PA-1": 0.06,
    "PA-10": 0.06,
    "PA-11": 0.3,
    "PA-12": -0.1,
    "PA-13": 1,
    "PA-14": 1,
    "PA-15": 1,
    "PA-16": 0.28,
    "PA-17": -0.02,
    "PA-2": -0.42,
    "PA-3": -1,
    "PA-4": -0.08,
    "PA-5": -0.21,
    "PA-6": -0.04,
    "PA-7": 0.06,
    "PA-8": 0.05,
    "PA-9": 0.42,
    "RI-1": -0.38,
    "RI-2": -0.04,
    "SC-1": 0.2,
    "SC-2": 0.23,
    "SC-3": 1,
    "SC-4": 0.29,
    "SC-5": 0.28,
    "SC-6": -0.2,
    "SC-7": 0.28,
    "SD-At-Large": 0.67,
    "TN-1": 0.65,
    "TN-2": 0.38,
    "TN-3": 0.37,
    "TN-4": 0.48,
    "TN-5": 0.09,
    "TN-6": 0.38,
    "TN-7": 0.26,
    "TN-8": 0.47,
    "TN-9": -0.36,
    "TX-1": 0.57,
    "TX-10": 0.33,
    "TX-11": 1,
    "TX-12": 0.34,
    "TX-13": 0.58,
    "TX-14": 0.37,
    "TX-15": 0.06,
    "TX-16": -0.35,
    "TX-17": 0.29,
    "TX-18": -0.34,
    "TX-19": 0.97,
    "TX-2": 0.42,
    "TX-20": -0.26,
    "TX-21": 0.36,
    "TX-22": 0.27,
    "TX-23": 0.22,
    "TX-24": 0.35,
    "TX-25": 0.96,
    "TX-26": 0.94,
    "TX-27": 0.42,
    "TX-28": -0.13,
    "TX-29": -0.28,
    "TX-3": 0.26,
    "TX-30": -0.55,
    "TX-31": 1,
    "TX-32": 0.21,
    "TX-33": -0.47,
    "TX-34": -0.07,
    "TX-35": -0.41,
    "TX-36": 0.47,
    "TX-37": -0.42,
    "TX-38": -0.39,
    "TX-4": 0.24,
    "TX-5": 0.34,
    "TX-6": 1,
    "TX-7": -0.29,
    "TX-8": 0.4,
    "TX-9": -0.47,
    "UT-1": 0.29,
    "UT-2": 0.24,
    "UT-3": 0.28,
    "UT-4": 0.31,
    "VA-1": 0.18,
    "VA-10": -0.03,
    "VA-11": -0.27,
    "VA-2": 0.04,
    "VA-3": -0.26,
    "VA-4": -0.24,
    "VA-5": 0.17,
    "VA-6": 0.3,
    "VA-7": -0.01,
    "VA-8": -0.47,
    "VA-9": 0.47,
    "VT-At-Large": -0.22,
    "WA-1": -0.2,
    "WA-10": -0.08,
    "WA-2": -0.13,
    "WA-3": 0.13,
    "WA-4": 0.33,
    "WA-5": 0.2,
    "WA-6": -0.09,
    "WA-7": -0.62,
    "WA-8": 0.003,
    "WA-9": -0.35,
    "WI-1": 0.13,
    "WI-2": -0.29,
    "WI-3": 0.12,
    "WI-4": -0.41,
    "WI-5": 0.34,
    "WI-6": 1,
    "WI-7": 0.29,
    "WI-8": 0.92,
    "WV-1": 0.37,
    "WV-2": 0.36,
    "WY-At-Large": 0.52
}