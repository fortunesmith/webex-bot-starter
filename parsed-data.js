const parsedData = {
  "?xml": "",
  "Status": {
    "Audio": {
      "Devices": {
        "HandsetUSB": {
          "ConnectionStatus": "NotConnected",
          "Cradle": "OnHook"
        },
        "HeadsetUSB": {
          "ConnectionStatus": "NotConnected",
          "Description": "",
          "Manufacturer": ""
        }
      },
      "Input": {
        "Connectors": {
          "HDMI": {
            "Mute": "On"
          },
          "Microphone": {
            "ConnectionStatus": "Connected",
            "EcReferenceDelay": 0
          },
          "USBC": {
            "Mute": "Off"
          }
        }
      },
      "Microphones": {
        "MusicMode": "Off",
        "Mute": "Off",
        "NoiseRemoval": "On",
        "VoiceActivityDetector": {
          "Activity": "False"
        }
      },
      "Output": {
        "Connectors": {
          "HDMI": {
            "Mode": "DelayMeasurement"
          },
          "InternalSpeaker": {
            "DelayMs": 0
          }
        },
        "MeasuredHdmiArcDelay": 0,
        "MeasuredHdmiDelay": 0,
        "ReportedHdmiCecDelay": 0
      },
      "SelectedDevice": "Internal",
      "USB": {
        "ConnectionStatus": {
          "Capture": "NotConnected",
          "Playback": "NotConnected"
        },
        "Product": "",
        "SerialNumber": "",
        "TerminalType": {
          "Capture": "",
          "Playback": ""
        }
      },
      "Ultrasound": {
        "Volume": 70
      },
      "Volume": 50,
      "VolumeHandsetUsb": 50,
      "VolumeHeadsetUsb": 50,
      "VolumeInternal": 50,
      "VolumeMute": "Off"
    },
    "Bookings": {
      "Availability": {
        "Status": "Free",
        "TimeStamp": ""
      },
      "Current": {
        "Id": ""
      }
    },
    "Cameras": {
      "Camera": {
        "Capabilities": {
          "Options": "ptzf"
        },
        "Connected": "True",
        "Framerate": 25,
        "Lenses": {
          "Lens": "Wide"
        },
        "LightingConditions": "Backlight",
        "Manufacturer": "Cisco",
        "Model": "Integrated Camera",
        "Position": {
          "Pan": 0,
          "Tilt": 0,
          "Zoom": 11460
        }
      },
      "SpeakerTrack": {
        "Availability": "Available",
        "BackgroundMode": "Inactive",
        "Closeup": {
          "Status": "Inactive"
        },
        "Frames": {
          "Availability": "Available",
          "Status": "Inactive"
        },
        "State": "BestOverview",
        "Status": "Active",
        "ViewLimits": {
          "Pan": 0,
          "Status": "Inactive",
          "Tilt": 0,
          "Zoom": 0
        }
      }
    },
    "Capabilities": {
      "Conference": {
        "MaxActiveCalls": 2,
        "MaxAudioCalls": 2,
        "MaxCalls": 7,
        "MaxVideoCalls": 1
      }
    },
    "Conference": {
      "DoNotDisturb": "Inactive",
      "EndToEndEncryption": {
        "Availability": "Available",
        "ExternalIdentity": {
          "Identity": "",
          "Status": "",
          "Verification": ""
        },
        "InternalIdentity": {
          "CertificateChain": {
            "Certificate": [
              {
                "Fingerprint": "db77d2806e37bc1d3ecbcf03dfa5ad2145248424",
                "NotAfter": "2024-09-09T03:00:37.000000000+0000",
                "NotBefore": "2024-09-02T02:59:37.000000000+0000",
                "PrimaryName": "agilustech.in",
                "PublicKeyAlgorithm": "ECDSA P256 SHA-256",
                "SerialNumber": "0132AE90AA93686DC3",
                "SignatureAlgorithm": "ECDSA P256 SHA-256",
                "Subject": [
                  {
                    "Name": "machine:d644b92e-8499-46ee-91df-9bcdb557b26f"
                  },
                  {
                    "Name": "agilustech.in"
                  }
                ],
                "Validity": "Valid"
              },
              {
                "Fingerprint": "f0138e71adb49ca52ee804495445f3c6cfcbd884",
                "NotAfter": "2051-04-08T17:49:58.000000000+0000",
                "NotBefore": "2021-04-08T18:26:50.000000000+0000",
                "PrimaryName": "Cisco",
                "PublicKeyAlgorithm": "ECDSA P384 SHA-384",
                "SerialNumber": "0900D80300E4F46D24",
                "SignatureAlgorithm": "ECDSA P384 SHA-384",
                "Subject": [
                  {
                    "Name": "webex-certificate-authority CA [prod-achm] Intermediate 9c12a"
                  },
                  {
                    "Name": "Cisco"
                  }
                ],
                "Validity": "Valid"
              },
              {
                "Fingerprint": "fb4e706d41ba6f1b5a1bf0475505cd09d446138e",
                "NotAfter": "2051-04-08T17:49:59.000000000+0000",
                "NotBefore": "2021-04-08T17:49:59.000000000+0000",
                "PrimaryName": "Cisco",
                "PublicKeyAlgorithm": "ECDSA P384 SHA-384",
                "SerialNumber": "0193AEDA0D5D47D361",
                "SignatureAlgorithm": "ECDSA P384 SHA-384",
                "Subject": [
                  {
                    "Name": "Webex Microservices Root CA"
                  },
                  {
                    "Name": "Cisco"
                  }
                ],
                "Validity": "Valid"
              }
            ]
          },
          "Identity": "agilustech.in",
          "Status": "Valid",
          "Verification": "WebexVerified"
        }
      },
      "HideNonVideo": {
        "Active": "False",
        "Available": "False"
      },
      "Multipoint": {
        "Mode": "Spark"
      },
      "PeopleFocus": {
        "Active": "False",
        "Available": "False"
      },
      "Presentation": {
        "CallId": 0,
        "Mode": "Off",
        "Whiteboard": {
          "BoardUrl": "",
          "Mode": "Off"
        }
      },
      "SelectedCallProtocol": "Spark",
      "SpeakerLock": {
        "CallId": 0,
        "Mode": "Auto"
      }
    },
    "Diagnostics": {
      "Message": {
        "Description": "The macro runtime is enabled and one or more macros are active.",
        "Level": "Info",
        "References": "active_macros=3&crashes=0",
        "Type": "MacrosRuntimeActive"
      }
    },
    "Logging": {
      "ExtendedLogging": {
        "Mode": "Off",
        "PacketDump": "Off"
      }
    },
    "Network": {
      "ActiveInterface": "LAN",
      "CDP": {
        "Address": "192.168.10.2",
        "Capabilities": 41,
        "DeviceId": "3750G.velocis.com",
        "Duplex": "Full",
        "Platform": "cisco WS-C3750G-48TS",
        "PortID": "GigabitEthernet1/0/1",
        "PrimaryMgmtAddress": "192.168.10.2",
        "SysName": "",
        "SysObjectID": "",
        "VTPMgmtDomain": "testlabvspl",
        "Version": "Cisco IOS Software, C3750 Software (C3750-IPBASEK9-M), Version 12.2(55)SE12, RELEASE SOFTWARE (fc2)*Technical Support: http://www.cisco.com/techsupport*Copyright (c) 1986-2017 by Cisco Systems, Inc.*Compiled Thu 28-Sep-17 02:29 by prod_rel_team",
        "VoIPApplianceVlanID": ""
      },
      "DNS": {
        "Domain": {
          "Name": ""
        },
        "Server": [
          {
            "Address": "8.8.8.8"
          },
          {
            "Address": ""
          },
          {
            "Address": ""
          },
          {
            "Address": ""
          },
          {
            "Address": ""
          }
        ]
      },
      "Ethernet": {
        "MacAddress": "4C:E1:75:65:D2:B4",
        "Speed": "1000full"
      },
      "IEEE8021X": {
        "Status": "Off"
      },
      "IPv4": {
        "Address": "192.168.10.167",
        "Gateway": "192.168.10.1",
        "SubnetMask": "255.255.255.0"
      },
      "IPv6": {
        "Address": "",
        "Gateway": "",
        "LinkLocalAddress": ""
      },
      "VLAN": {
        "Voice": {
          "VlanId": "Off"
        }
      },
      "Wifi": {
        "BSSID": "",
        "CLMVersion": "Nvidia.Havella v1 181128",
        "Channel": 0,
        "Connectivity": "False",
        "FWVersion": "7.35.349.124 01-8b476f26",
        "Frequency": 0,
        "InterfaceEnabled": "Off",
        "InterfaceReason": "wlan=Down, config=true",
        "KeyMgmt": "",
        "MacAddress": "4C:E1:75:65:D2:B6",
        "Noise": 0,
        "Phase2Method": "",
        "RSSI": -99,
        "RawSSID": "",
        "Reason": "",
        "Region": "",
        "SNR": 0,
        "SSID": "",
        "SWVersion": "v5.15.58-2024_0514-0-gef146dbc5c4f",
        "Speed": 0,
        "Status": "Disconnected",
        "ToolsVersion": "18.15 RC1.79",
        "Type": "Wpa2-psk"
      }
    },
    "NetworkServices": {
      "UPnP": {
        "Status": "Stopped"
      }
    },
    "Peripherals": {
      "ConnectedDevice": [
        {
          "HardwareInfo": "SCF",
          "ID": "byod-48",
          "Location": "NotSet",
          "Name": "",
          "NetworkAddress": "192.168.10.185",
          "SoftwareInfo": 8,
          "Status": "Connected",
          "Type": "Byod",
          "UpgradeStatus": "None"
        },
        {
          "HardwareInfo": "SCF",
          "ID": "byod-45",
          "Location": "NotSet",
          "Name": "",
          "NetworkAddress": "192.168.10.108",
          "SoftwareInfo": 8,
          "Status": "Connected",
          "Type": "Byod",
          "UpgradeStatus": "None"
        },
        {
          "HardwareInfo": "101282-0",
          "ID": "d4:e8:80:c8:a7:50",
          "Location": "NotSet",
          "Name": "Cisco TelePresence Touch",
          "NetworkAddress": "169.254.1.44",
          "SerialNumber": "FOC2311NATM",
          "SoftwareInfo": "ce11.19.1.7.3055d561c16",
          "Status": "Connected",
          "Type": "TouchPanel",
          "UpgradeStatus": "None"
        }
      ],
      "PinPairing": {
        "TimeRemaining": 0
      }
    },
    "Provisioning": {
      "CUCM": {
        "Customization": {
          "Checksum": ""
        }
      },
      "Reason": "",
      "Server": "",
      "Software": {
        "Current": {
          "CompletedAt": "2024-09-02T03:00:39Z",
          "URL": "",
          "VersionId": "ce11.19.1.7 3055d561c16 2024-08-05"
        },
        "UpgradeStatus": {
          "LastChange": "2024-08-10T04:32:09Z",
          "Message": "",
          "Phase": "None",
          "SessionId": "",
          "Status": "None",
          "URL": "",
          "Urgency": "Medium",
          "VersionId": ""
        }
      },
      "Status": "Provisioned",
      "WebexCalling": {
        "Status": "Idle"
      }
    },
    "Proximity": {
      "PairingCount": 2,
      "Services": {
        "Availability": "Available"
      }
    },
    "RemoteAccess": {
      "Availability": {
        "Reason": "Configured",
        "State": "Unavailable"
      }
    },
    "RoomAnalytics": {
      "AmbientNoise": {
        "Level": {
          "A": 40
        }
      },
      "Engagement": {
        "CloseProximity": "False"
      },
      "PeopleCount": {
        "Capacity": 10,
        "Current": 4
      },
      "PeoplePresence": "Yes",
      "ReverberationTime": {
        "LastRun": "2024-09-02T12:26:16Z",
        "Middle": {
          "RT60": 0
        },
        "Octaves": [
          {
            "CenterFrequency": 125,
            "RT60": 0
          },
          {
            "CenterFrequency": 250,
            "RT60": 0
          },
          {
            "CenterFrequency": 500,
            "RT60": 0
          },
          {
            "CenterFrequency": 1000,
            "RT60": 0
          },
          {
            "CenterFrequency": 2000,
            "RT60": 0
          },
          {
            "CenterFrequency": 4000,
            "RT60": 0
          }
        ]
      },
      "RoomInUse": "True",
      "Sound": {
        "Level": {
          "A": 45
        }
      },
      "T3Alarm": {
        "Detected": "False"
      },
      "UltrasoundPresence": "No"
    },
    "RoomPreset": [
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      },
      {
        "Defined": "False",
        "Description": "",
        "Type": "All"
      }
    ],
    "SIP": {
      "Authentication": "Off",
      "CallForward": {
        "DisplayName": "",
        "Mode": "Off",
        "URI": ""
      },
      "Mailbox": {
        "MessagesWaiting": 0,
        "URI": ""
      },
      "Proxy": {
        "Address": "",
        "Status": "Off"
      },
      "Registration": {
        "Reason": "",
        "Status": "Inactive",
        "URI": ""
      },
      "Secure": "False",
      "Verified": "False"
    },
    "Standby": {
      "State": "Off"
    },
    "SystemUnit": {
      "BroadcastName": "VSPL-BLR-Venus",
      "DeveloperPreview": {
        "Mode": "Off"
      },
      "Hardware": {
        "DRAM": 4,
        "HasWifi": "True",
        "MainBoard": {
          "Revision": "E"
        },
        "Module": {
          "CompatibilityLevel": 2,
          "DeviceId": "373a93cd-5f65-572a-81d8-95d0b15ebad4",
          "SerialNumber": "FOC2402N8ZX"
        },
        "Monitoring": {
          "Temperature": {
            "Status": "Normal"
          }
        },
        "UDI": "CS-KIT-MINI V01 FOC2402N8ZX"
      },
      "LastShutdownReason": "Unknown",
      "LastShutdownTime": "",
      "ProductId": "Cisco Room Kit Mini",
      "ProductPlatform": "Room Kit Mini",
      "ProductType": "Cisco Codec",
      "Software": {
        "DisplayName": "RoomOS 11.19.1.7 3055d561c16",
        "Name": "s53200",
        "OptionKeys": {
          "DeveloperPreview": "False",
          "Encryption": "True",
          "MultiSite": "False",
          "RemoteMonitoring": "False"
        },
        "ReleaseDate": "2024-08-05",
        "Version": "ce11.19.1.7.3055d561c16"
      },
      "State": {
        "NumberOfActiveCalls": 0,
        "NumberOfInProgressCalls": 0,
        "NumberOfSuspendedCalls": 0,
        "Subsystem": {
          "Application": "Initialized"
        },
        "System": "Initialized"
      },
      "Uptime": 35248
    },
    "ThousandEyes": {
      "Status": "Unregistered",
      "Version": "1.198.0"
    },
    "Time": {
      "SystemTime": "2024-09-02T18:12:29+0530"
    },
    "UserInterface": {
      "Branding": {
        "CustomId": {
          "Background": "RoomOS-WebUI",
          "Branding": "",
          "HalfwakeBackground": "",
          "HalfwakeBranding": ""
        }
      },
      "ContactInfo": {
        "ContactMethod": {
          "Number": "vspl-blr-venus@velocis.room.ciscospark.com"
        },
        "Name": "VSPL-BLR-Venus"
      },
      "Extensions": {
        "Widget": [
          {
            "Value": "",
            "WidgetId": "Biscuit_decr"
          },
          {
            "Value": "",
            "WidgetId": "Biscuit_incr"
          },
          {
            "Value": "",
            "WidgetId": "Biscuit_text"
          },
          {
            "Value": "",
            "WidgetId": "blcoffee_decr"
          },
          {
            "Value": "",
            "WidgetId": "blcoffee_incr"
          },
          {
            "Value": "",
            "WidgetId": "blcoffee_text"
          },
          {
            "Value": "",
            "WidgetId": "blcoffeewo_decr"
          },
          {
            "Value": "",
            "WidgetId": "blcoffeewo_incr"
          },
          {
            "Value": "",
            "WidgetId": "blcoffeewo_text"
          },
          {
            "Value": "",
            "WidgetId": "bltea_decr"
          },
          {
            "Value": "",
            "WidgetId": "bltea_incr"
          },
          {
            "Value": "",
            "WidgetId": "bltea_text"
          },
          {
            "Value": "",
            "WidgetId": "blteawo_decr"
          },
          {
            "Value": "",
            "WidgetId": "blteawo_incr"
          },
          {
            "Value": "",
            "WidgetId": "blteawo_text"
          },
          {
            "Value": "",
            "WidgetId": "coffee_decr"
          },
          {
            "Value": "",
            "WidgetId": "coffee_incr"
          },
          {
            "Value": "",
            "WidgetId": "coffee_text"
          },
          {
            "Value": "",
            "WidgetId": "coffeewo_decr"
          },
          {
            "Value": "",
            "WidgetId": "coffeewo_incr"
          },
          {
            "Value": "",
            "WidgetId": "coffeewo_text"
          },
          {
            "Value": "",
            "WidgetId": "greentea_decr"
          },
          {
            "Value": "",
            "WidgetId": "greentea_incr"
          },
          {
            "Value": "",
            "WidgetId": "greentea_text"
          },
          {
            "Value": "",
            "WidgetId": "greenteawo_decr"
          },
          {
            "Value": "",
            "WidgetId": "greenteawo_incr"
          },
          {
            "Value": "",
            "WidgetId": "greenteawo_text"
          },
          {
            "Value": "",
            "WidgetId": "lemonGrassTea_decr"
          },
          {
            "Value": "",
            "WidgetId": "lemonGrassTea_incr"
          },
          {
            "Value": "",
            "WidgetId": "lemonGrassTea_text"
          },
          {
            "Value": "",
            "WidgetId": "submit01"
          },
          {
            "Value": "",
            "WidgetId": "submit02"
          },
          {
            "Value": "",
            "WidgetId": "submit03"
          },
          {
            "Value": "",
            "WidgetId": "tea_decr"
          },
          {
            "Value": "",
            "WidgetId": "tea_incr"
          },
          {
            "Value": "",
            "WidgetId": "tea_text"
          },
          {
            "Value": "",
            "WidgetId": "teawo_decr"
          },
          {
            "Value": "",
            "WidgetId": "teawo_incr"
          },
          {
            "Value": "",
            "WidgetId": "teawo_text"
          },
          {
            "Value": "",
            "WidgetId": "waterbottle_decr"
          },
          {
            "Value": "",
            "WidgetId": "waterbottle_incr"
          },
          {
            "Value": "",
            "WidgetId": "waterbottle_text"
          },
          {
            "Value": "",
            "WidgetId": "widget_5"
          },
          {
            "Value": "",
            "WidgetId": "widget_6"
          },
          {
            "Value": "",
            "WidgetId": "widget_7"
          },
          {
            "Value": "",
            "WidgetId": "widget_8"
          }
        ]
      },
      "Features": {
        "Calendar": {
          "Start": "Visible"
        },
        "Call": {
          "AudioMute": "Visible",
          "Breakouts": "Enabled",
          "CameraControls": "Visible",
          "End": "Visible",
          "JoinGoogleMeet": "Visible",
          "JoinWebex": "Visible",
          "JoinZoom": "Visible",
          "Keypad": "Visible",
          "LayoutControls": "Visible",
          "MidCallControls": "Visible",
          "MusicMode": "Hidden",
          "ParticipantList": "Visible",
          "SelfviewControls": "Visible",
          "Start": "Visible",
          "VideoMute": "Visible",
          "Webcam": "Visible"
        },
        "Files": {
          "Start": "Hidden"
        },
        "Share": {
          "Start": "Visible"
        },
        "Whiteboard": {
          "Start": "Hidden"
        }
      },
      "LedControl": {
        "Color": "Red"
      },
      "OSD": {
        "Output": 1
      },
      "ScreenLock": {
        "Status": "Unavailable"
      },
      "SettingsMenu": {
        "Visibility": "Visible"
      },
      "Translation": {
        "Override": {
          "Checksum": ""
        }
      }
    },
    "Video": {
      "ActiveSpeaker": {
        "PIPPosition": "UpperRight"
      },
      "Input": {
        "AirPlay": {
          "Activity": "Idle",
          "Status": "Active"
        },
        "Connector": [
          {
            "Connected": "True",
            "SignalState": "OK",
            "SourceId": 1,
            "Type": "Camera"
          },
          {
            "Connected": "False",
            "SignalState": "NotFound",
            "SourceId": 2,
            "Type": "HDMI"
          }
        ],
        "MainVideoMute": "Off",
        "MainVideoSource": 1,
        "Miracast": {
          "Channel": 11,
          "PinAttemptsLeft": 10,
          "Status": "Started",
          "Transport": "None"
        },
        "Source": [
          {
            "Availability": "Idle",
            "ConnectorId": 1,
            "FormatStatus": "Ok",
            "MediaChannelId": 116,
            "Resolution": {
              "Height": 1080,
              "RefreshRate": 25,
              "Width": 1920
            }
          },
          {
            "Availability": "Idle",
            "ConnectorId": 2,
            "FormatStatus": "NotFound",
            "MediaChannelId": 117,
            "Resolution": {
              "Height": 0,
              "RefreshRate": 0,
              "Width": 0
            }
          }
        ]
      },
      "Layout": {
        "CurrentLayouts": {
          "ActiveLayout": "Grid",
          "AvailableLayouts": [
            {
              "LayoutName": "Grid"
            },
            {
              "LayoutName": "Stack"
            },
            {
              "LayoutName": "Prominent"
            },
            {
              "LayoutName": "Focus"
            }
          ],
          "DefaultLayout": "Grid"
        },
        "LayoutFamily": {
          "Local": "equal"
        }
      },
      "Monitors": "Single",
      "Output": {
        "Connector": {
          "Connected": "True",
          "ConnectedDevice": {
            "Name": "SyncMaster",
            "PreferredFormat": "1920x1080@60Hz",
            "ScreenSize": 55,
            "SupportedFormat": {
              "Res_1920_1080_50": "True",
              "Res_1920_1080_60": "True",
              "Res_1920_1200_50": "False",
              "Res_1920_1200_60": "False",
              "Res_2560_1080_60": "False",
              "Res_2560_1440_60": "False",
              "Res_2880_1200_60": "False",
              "Res_3440_1440_60": "False",
              "Res_3840_1600_60": "False",
              "Res_3840_1620_60": "False",
              "Res_3840_2160_30": "False",
              "Res_3840_2160_60": "False"
            }
          },
          "HDCP": {
            "State": "Unsupported",
            "Version": "None"
          },
          "MonitorRole": "First",
          "Resolution": {
            "Height": 1080,
            "RefreshRate": 60,
            "Width": 1920
          },
          "Type": "HDMI"
        },
        "Monitor": {
          "ManufacturerId": "SAM",
          "ModelName": "SyncMaster"
        },
        "Webcam": {
          "Mode": "Disconnected",
          "Status": "Inactive"
        }
      },
      "Presentation": {
        "PIPPosition": "CenterLeft"
      },
      "Selfview": {
        "FullscreenMode": "Off",
        "Mode": "Off",
        "OnMonitorRole": "First",
        "PIPPosition": "CenterRight"
      }
    },
    "WebEngine": {
      "Features": {
        "Signage": "Off",
        "WebEngine": "On",
        "WebRTC": "On"
      }
    },
    "WebRTC": {
      "Provider": {
        "GoogleMeet": {
          "Availability": "Available"
        },
        "MicrosoftTeams": {
          "Availability": "Available"
        }
      }
    },
    "Webex": {
      "DeveloperId": "Y2lzY29zcGFyazovL3VybjpURUFNOnVzLWVhc3QtMl9hL0RFVklDRS9hNWNlMmNjNC0xN2NiLTRmMjUtYmUyMi1jMzIyZjlhMzNjYjQ=",
      "Meetings": {
        "InstantMeeting": {
          "Availability": "Available"
        },
        "JoinProtocol": "Webex"
      },
      "Services": {
        "Proximity": {
          "GuestToken": "3XP-DD8-W75"
        }
      },
      "Status": "Registered"
    }
  }
};

module.exports = parsedData;