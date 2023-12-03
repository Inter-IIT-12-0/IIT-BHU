import React, {useEffect, useState} from "react";
import axios from "axios";

const ClientProjectComponent = ({teamName, bidAmount}) => {

    const test = 
    [
        {
          "_id": "65684d682dd359919a8da9af",
          "title": "Sample Project",
          "statement": "This is a sample project statement. sdfghjkcvssbvskvjsbnfbjkfnglshgrgjabvneiutugjkaivb eafgbvjhefisdgnehjdgbhjentg\nLorem Ipsum fshdvlshduigfnvfsbi nfsgivlknjsfdbgfdknsdvjsdfngfdlkbnfdb",
          "milestones": [
            {
              "dueDate": "2023-12-31T23:59:59.999Z",
              "heading": "Project Kickoff",
              "submissionLink": "https://example.com/submission",
              "feedbackLink": "https://example.com/feedback",
              "subMilestones": [
                {
                  "title": "Planning",
                  "isCompleted": false,
                  "status": "Not Started",
                  "dueDate": "2023-11-30T23:59:59.999Z",
                  "assignedTo": "656b678eaa8a02c5c87c8d89",
                  "description": "Plan the project activities",
                  "startDate": null,
                  "endDate": null,
                  "Aitools": [
                    {
                      "0": "Engineering",
                      "_id": "656c1e2efb59310dec32ae29"
                    }
                  ],
                  "connectedApps": [
                    [
                      "Figma",
                      "http://figma.com"
                    ]
                  ],
                  "work": {
                    "fileType": "file",
                    "file": {
                      "type": "Buffer",
                      "data": [
                        98,
                        97,
                        115,
                        101,
                        54,
                        52,
                        95,
                        101,
                        110,
                        99,
                        111,
                        100,
                        101,
                        100,
                        95,
                        102,
                        105,
                        108,
                        101,
                        95,
                        99,
                        111,
                        110,
                        116,
                        101,
                        110,
                        116,
                        95,
                        104,
                        101,
                        114,
                        101
                      ]
                    },
                    "_id": "65684d682dd359919a8da9b2"
                  },
                  "stickyNotes": [
                    "Note 1",
                    "Note 2"
                  ],
                  "_id": "65684d682dd359919a8da9b1"
                },
                {
                  "stickyNotes": [],
                  "_id": "656c1e2efb59310dec32ae2a",
                  "title": "Sub milestone 2",
                  "status": "Not Started",
                  "dueDate": "2023-12-15T23:59:59.999Z",
                  "assignedTo": "656b678eaa8a02c5c87c8d89",
                  "isCompleted": false,
                  "description": "Some random description",
                  "startDate": null,
                  "endDate": null,
                  "Aitools": []
                }
              ],
              "isCompleted": false,
              "status": "Completed",
              "_id": "65684d682dd359919a8da9b0",
              "description": "asdfghjkl asdfghn cfghnbvcxscvbnfhdvgvbnvshfbvnamnadfhjnsdfebhvsdhgsikerbjjhegjnh",
              "payment": 5000,
              "paymentDate": "2023-12-15T23:59:59.999Z"
            },
            {
              "isCompleted": false,
              "_id": "656c1e2efb59310dec32ae2b",
              "heading": "Heading",
              "payment": 4000,
              "status": "In Progress",
              "paymentDate": null,
              "dueDate": "2023-12-31T23:59:59.999Z",
              "description": "Lorem ipsum doler admit fdghfjvsdnnjf sgjnsfgdkb df gdfsbij edsfgjk",
              "subMilestones": []
            },
            {
              "isCompleted": false,
              "_id": "656c1e2efb59310dec32ae2c",
              "heading": "Milestone 3",
              "payment": 6000,
              "status": "Not Started",
              "paymentDate": null,
              "dueDate": "2023-12-24T23:59:59.999Z",
              "description": "Lorem ipsum doler admit fdghfjvsdnnjf sgjnsfgdkb df gdfsbij edsfgjk",
              "subMilestones": []
            }
          ],
          "userAgreement": {
            "_id": "65684d682dd359919a8da9b3"
          },
          "assignedTeam": {
            "availability": {
              "daysAvailable": [],
              "whichDays": []
            },
            "service": [],
            "languagesSupported": [],
            "tools": [],
            "skills": [],
            "teamUserMap": [
              {
                "user": "656af2a4acba1f116ca953e6",
                "role": "Leader",
                "status": "Approved",
                "_id": "656c0ea59677236775565309"
              }
            ],
            "project": "65684d682dd359919a8da9af",
            "status": "In Proposal"
          },
          "assignedBy": {
            "currentAddress": {
              "streetAddress": "123 Main St",
              "houseNumber": "Apt 4",
              "zipCode": "12345",
              "country": "USA",
              "state": "CA",
              "city": "San Francisco"
            },
            "expertise": {
              "tools": [
                "Figma",
                "Sketch"
              ],
              "certificates": [
                "UX Certification"
              ],
              "skills": [
                "Wireframing",
                "Prototyping"
              ]
            },
            "fees": {
              "preferredCurrency": "USD",
              "hourlyRate": 50
            },
            "_id": "65684b792dd359919a8da979",
            "name": "Client 1",
            "avatarUrl": "https://www.text-image.com/samples/per_normal_face.jpg",
            "mobileNumber": "9234567890",
            "email": "user@example.com",
            "tagline": "UX/UI Designer",
            "workExperienceYears": 3,
            "workExperienceMonths": 6,
            "professionalIntroduction": "Passionate designer with a focus on user-centric solutions.",
            "domain": "UX/UI Designer",
            "role": "Client",
            "languages": [
              "English",
              "French"
            ],
            "companyName": "ABC Corp",
            "sectorName": "Technology",
            "educationDetails": [
              {
                "nameOfCollegeOrUniversity": "University of Design",
                "degree": "Bachelors in Design",
                "_id": "65684b792dd359919a8da97a"
              }
            ],
            "preferredTimeZone": "PST",
            "daysAvailable": "Weekdays",
            "availableDays": [
              "Mon",
              "Wed",
              "Fri"
            ],
            "startTime": "9:00 AM",
            "endTime": "5:00 PM",
            "socialMedia": [
              {
                "description": "LinkedIn",
                "url": "https://www.linkedin.com/in/johndoe/",
                "_id": "65684b792dd359919a8da97b"
              },
              {
                "description": "Behance",
                "url": "https://www.behance.net/johndoe/",
                "_id": "65684b792dd359919a8da97c"
              }
            ],
            "projects": [
              "6566191df6c040e25b84e5fc",
              "65661281749c5f585ddbf19c"
            ],
            "lastLogin": "2023-01-15T12:30:00.000Z",
            "paymentsCompleted": 10,
            "projectsPosted": 5,
            "rating": 4.5,
            "createdAt": "2023-11-30T08:44:41.399Z",
            "updatedAt": "2023-11-30T08:44:41.399Z",
            "__v": 0,
            "institute": "IIT Bombay"
          },
          "logo": "https://example.com/logo.png",
          "health": {
            "progress": 0,
            "_id": "65684d682dd359919a8da9b4"
          },
          "startDate": "2023-11-01T00:00:00.000Z",
          "endDate": "2024-01-01T23:59:59.999Z",
          "clientRequirements": {
            "paymentType": "Fixed",
            "payment": 5000,
            "workDays": [
              "Mon",
              "Wed",
              "Fri"
            ],
            "requiredTools": [
              "Engineering"
            ],
            "files": [
              {
                "type": "Buffer",
                "data": [
                  0,
                  0
                ]
              }
            ],
            "_id": "65684d682dd359919a8da9b8"
          },
          "work": {
            "fileType": "file",
            "file": {
              "type": "Buffer",
              "data": [
                98,
                97,
                115,
                101,
                54,
                52,
                95,
                101,
                110,
                99,
                111,
                100,
                101,
                100,
                95,
                102,
                105,
                108,
                101,
                95,
                99,
                111,
                110,
                116,
                101,
                110,
                116,
                95,
                104,
                101,
                114,
                101
              ]
            },
            "_id": "65684d682dd359919a8da9b9"
          },
          "duration": 30,
          "domain": "example.com",
          "postedOn": "2023-11-15T12:00:00.000Z",
          "status": "In Review",
          "location": "Remote",
          "connectedApps": [
            {
              "_id": "656c1e2efb59310dec32ae2d",
              "tool": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABaFBMVEX////zTh7/cWGiWf8KzoIavP3///37bVj/cWLySxr9//////z1squlVf94f9oA1HueWv+eSfrwpIzzRgnQU5AAyXfd+fD1Tgjz6vb8a1v///j4//8bu/7//P8Az378c2EYvfz37eMAtvIAuP6fTvkAyYHz3s7uw7PttaDuppfxtKj4vrf0yMT129b17+vtno3lZEfwPwD3eGr1n5fy0MjjYC/2OAD55uPnRQvzlo3lVibpk3nxfnTybF/57t3qUi7ofmTqt6Pkh2b3b1LppITqg13+ZFLkbUnmSxXym5HoWDLx0NPeoLzTfKXRYZLzqar7uKros7PLqK63nqypmK6xp7PCur/c0tbWuvG3ifCkYfey5fRp0/cvxviO1/HO7/CueeyhaOym4O3Nr+68luvdx/CY2uzM4PSlzfF+w/RYue01rvx20e7l1u/AlPGysueWl+K57N193rZE0J+K376p58o80JbM8ufmmT/sAAAIs0lEQVR4nO2dC3caxxWAp8gMqxmpFVYhMLPLY0GyYzvYcuRXajVtkzhu+kpat7UECEm21BdNix7473cGcGwZdplLCnfWme/46OgcG5/9zp1777wAQhwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8Ph+GHDmCRM/Yz8+5hX6lfRmH9hA/opq5vXrn94+2oUK1HcuHHz1kcNKe1VZJQRsXn7zsOtrfUYMnE8Kd79eFuw6CGACxPX791fX1/+URzLGS8VRzmT2fn4gcR2mYDKv6sPt+LthoaxggovlSk+esDsSkjGKbv2ydZUPYMYDhy9YvEG16PeHqT4mUH8TA2VYqr4uCoDWxR1/bwzJf1ghprMzrY12cjJzz9dN/MDGHqZ4i1mSS6y6qcfGEYQYKgUM9vSDkN+zziCEMOUVy5u2mDI6C8AghBD1Te8hgywBQn7pVGXmMUwlSo+khTbj1UhEYQapjK3sMcpI7+aq2Gq3MA23ASNUbjhZyvIQZSgMgM39Mo7gmGmIqsCQwiOoVe8ibmWYuzqvA1TqceYMaT8jvFkZmbDYhVPkJDGw7kbltUwxRNk16CDdBbDR3iGTH4OrKSzjNLUXTxDyr5YgKFXbqApUnkPmoazxLBYRVvsU/bJQgw/wusXDFxKE2f49D03ZIsZpRlMQ/CUZpZamnmA1y7kF4uI4Q5etyDy6mI6Pt7qYhGztpSHOGtTy0PTre7vYVi8iSc4S6mZwRCx0BBGVua+xk89xt1PXMguBqqhhK4uwLuJRcReoZn3bqKXwd5NDOa7I+yldrB39VUmPpyfoVd+cg17V1+fzNyfn2HmkQUXT7gEjVPI+aHnYU5Jv4Oy4M7y0/kYqpUhtp6Gsar5MT7gHF8JblshqKNYNT/nNjdMWSOokNUvTduioWHZy+xYJKiiSG/fXzaahBsaepnHmBPuMfSF0u2v7psoTjf09I2o4jdccmytyzDCrz816IzTDcvlTPHXDQv64DuoJ2KN619t6btD+k9UPJeL5XF03Iao5eCTnRUrb19qAsY2b3+5vvVBHE+KExhdoFW/3f1Q36DFNomEqmejjd/89ne//2kkfxi7/vz11yvf/PFPz549+/Nf/toQ+n/B9oiEEVF4vru3Vl9dWosiWxhcBh8w+I3KZqsdViqVtMIP2/sdQallRWaEqjXHB3Vlt7S2FI0yfPMKSUWzFfq+n1Z+6qei4tfCk7yNhlz5HWq9KWQL9PWKj1HebIcDu0v4ftiVglhmyUThILu6Fhe9MUPRadXSfnoClVp4xLhV6Uj5C4P4vW2oBI7CWmUsgMMopkO/JalFNZWL3fr08F0yDGR3YvjexLGtSg622HcEh6aCI0NKZGs8AS8b+mHHlqLKGoerpoIjQ6YFpxJ27LjnzcRB3dRvYMgZE91Bf4gXVDW1I7DtNOKl8RAdxZCJk/gR+ppaaMP7vMQxIILDGIpOaGZYSbfQE5HyYA8iODRsGyThKIpH2PWUUtAYHRqeGAuqiSr2QooXQGN0aTVb4DI0GqIjxROO+34E/i3YUOzXAIbpEHk3IzCcrL1lKEMfYugf4XaM51lQFmrDpnkWDgzbqFNwegALoa40JrOZS8O0gylYWDOfrw2pFyB1ZgBmwxDHWWAIl+p/Axuqro/lSOkLWCXVhn8HDlK1jOIcLYp8F274j2kT7jFDzH4hDqGFZnX1n8AQqmqKuMIQsDnpQPFf0DRM1zpoMaQCWEh1DMGGfrqJ1hEXZOhjGi5olCLm4SHcEF5pUA3BkzbVLcAxDBHf7cxfztDxK+B+iDjz5jPN2oAhrGDu1dACcHmo1xbQeam/jzjzZgKwFzxArQ/bQEPU1RMh0Km3MjyqwULYxt3FAG5EDXcxYIb7uMds0EW+3mvrggyxd6L4v8F7bbQTQsZpN+5T7BZhyHdhQdQ7wlNODi+N0TCPvenNC7Biqk9mAJmoshBZkBL+ArStrw1ps2YWxQryVuIQJg4ge6aDGKpxatQUfeReOIQz0OnT8IRUGrb9JnYSDmEqFYGn3CTf9qcO1Fr6xJYLYLywZ1xQh4acKsUpm25+5cSKM+4BStG0Lb6+bcJlO05PLbFqeJsX4zAe7GZhN4akiL1QU1ETbouu0xBdUZ+bhfHNrS/Gm+2oW19pv4v+MWbvImjwbd3A8Y1hwIXcD/1aZays+ul2xzY/og8xeOHlXnaapDIcvUB/LDLVjnpbo6J+6tJT0bdoWk3OUT/+KhJK6PHuXr2eXY3m7ful+gKmYM1u2w9rvqJW8Wvp9kkH8SRmCuq5BCeF4//898fRFC6/RgVLjdbmyX631eruNzuSW3KXbSIsILJ32s/9JI78hBdyLgQVwt7YDdC969XpxpVS6UocuUmG+k03VH9usEU3SsdQ8eud5eLtog0TQd7EL7GGanD1rpj4JdYwYKc5I7+EGqoCcWYWwKQaEmkumERDygKAYBINGTkHCCbQkAU90yKTUEMiIX4JNGTEuE8k1TAPE0yeITmFlJkkGsoNmGDyDC+MptvJNQwIpNkn0ZDlN953Q1i3T6AhbMKWSENwGibOsA8VTJwhtBs6Q+tgzjDxhvBRWsphvycUBAv64G6xkSxD8NrpSqmP/dAwgguw4Sn2MwPJQxOxdIH9yDDo+78ABidiwtJQlZpXsOVT6SKw+ph3AgFw7p2oXjEEtAYunWM/LhzG+lMO7t8W3MjjfyMlFJWJhoe/itw5SZ4hAZTTUt/imxYxMGlcbBLXC19jenTRw37Q2XllJHhhwUc+zQhTLWN6Lp4TW76DegZUQZ22951LcASH5GPXwqWNHvK7l743lLDTyDCWcmcJ7PRjMJI/m+SoZjz9XjIb/RgqG89y75Qc7XeRwNl2BCrR8hd9JVka2ZVy/fNX2E/1/0f2Lk7P+v3+2el5L5/s6jKZS7d834/0ewf9GdaUEqogiN8I53A4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HD8w/gdrPHC46pEgEAAAAABJRU5ErkJggg==",
              "url": "https://www.figma.com/",
              "connectedOn": "2023-12-01T12:36:00.000Z",
              "connectedBy": "65684b792dd359919a8da979"
            }
          ],
          "activities": [
            {
              "submilestone": {
                "title": "Planning",
                "isCompleted": false,
                "status": "Not Started",
                "dueDate": "2023-11-30T23:59:59.999Z",
                "assignedTo": "6560d7235a1a92bb3912e4ac",
                "description": "Plan the project activities",
                "startDate": null,
                "endDate": null,
                "Aitools": [
                  [
                    "Engineering"
                  ]
                ],
                "connectedApps": [
                  [
                    "Figma",
                    "http://figma.com"
                  ]
                ],
                "work": {
                  "fileType": "file",
                  "file": "YmFzZTY0X2VuY29kZWRfZmlsZV9jb250ZW50X2hlcmU=",
                  "_id": "65684d682dd359919a8da9b7"
                },
                "stickyNotes": [
                  "Note 1",
                  "Note 2"
                ],
                "_id": "65684d682dd359919a8da9b6"
              },
              "type": "CREATE",
              "timestamp": "2023-11-15T12:34:56.789Z",
              "user": "656b678eaa8a02c5c87c8d89",
              "message": "Submilestone 'Planning' created.",
              "_id": "65684d682dd359919a8da9b5"
            },
            {
              "submilestone": {
                "title": "Sample SubMilestone",
                "isCompleted": false,
                "status": "In Progress",
                "dueDate": "2023-12-31T23:59:59.999Z",
                "assignedTo": "6560d7235a1a92bb3912e4ac",
                "description": "This is a sample sub-milestone description.",
                "startDate": "2023-12-01T00:00:00.000Z",
                "endDate": "2023-12-15T23:59:59.999Z",
                "Aitools": [
                  {
                    "tool": "Figma",
                    "url": "http://figma.com",
                    "connectedOn": "2023-12-01T12:36:00.000Z",
                    "connectedBy": "6560d7235a1a92bb3912e4ac"
                  }
                ],
                "work": {
                  "fileType": "file",
                  "file": "<Binary Data>"
                },
                "stickyNotes": [
                  "Note 1: Remember to complete task A."
                ]
              },
              "type": "CREATE",
              "timestamp": "2023-12-01T14:30:00.000Z",
              "user": "656b678eaa8a02c5c87c8d89",
              "message": "User created a new sub-milestone."
            }
          ],
          "activity": []
        },
        {
          "_id": "656b6456683ad8b246462cd1",
          "title": "Sample Project 2",
          "statement": "This is a sample project statement. sdfghjkcvssbvskvjsbnfbjkfnglshgrgjabvneiutugjkaivb eafgbvjhefisdgnehjdgbhjentg",
          "milestones": [
            {
              "dueDate": "2023-12-31T23:59:59.999Z",
              "heading": "Project Kickoff",
              "submissionLink": "https://example.com/submission",
              "feedbackLink": "https://example.com/feedback",
              "subMilestones": [
                {
                  "title": "Planning",
                  "isCompleted": false,
                  "status": "Not Started",
                  "dueDate": "2023-11-30T23:59:59.999Z",
                  "assignedTo": "6560d7235a1a92bb3912e4ac",
                  "description": "Plan the project activities",
                  "startDate": null,
                  "endDate": null,
                  "Aitools": [
                    {
                      "0": "Engineering",
                      "_id": "656c1e2efb59310dec32ae30"
                    }
                  ],
                  "connectedApps": [
                    [
                      "Figma",
                      "http://figma.com"
                    ]
                  ],
                  "work": {
                    "fileType": "file",
                    "file": {
                      "type": "Buffer",
                      "data": [
                        98,
                        97,
                        115,
                        101,
                        54,
                        52,
                        95,
                        101,
                        110,
                        99,
                        111,
                        100,
                        101,
                        100,
                        95,
                        102,
                        105,
                        108,
                        101,
                        95,
                        99,
                        111,
                        110,
                        116,
                        101,
                        110,
                        116,
                        95,
                        104,
                        101,
                        114,
                        101
                      ]
                    },
                    "_id": "65684d682dd359919a8da9b2"
                  },
                  "stickyNotes": [
                    "Note 1",
                    "Note 2"
                  ],
                  "_id": "65684d682dd359919a8da9b1"
                },
                {
                  "stickyNotes": [],
                  "_id": "656c1e2efb59310dec32ae31",
                  "title": "Sub milestone 2",
                  "status": "Not Started",
                  "dueDate": "2023-12-15T23:59:59.999Z",
                  "assignedTo": "6560d7235a1a92bb3912e4ac",
                  "isCompleted": false,
                  "description": "Some random description",
                  "startDate": null,
                  "endDate": null,
                  "Aitools": []
                }
              ],
              "isCompleted": false,
              "status": "Completed",
              "_id": "65684d682dd359919a8da9b0",
              "description": "asdfghjkl asdfghn cfghnbvcxscvbnfhdvgvbnvshfbvnamnadfhjnsdfebhvsdhgsikerbjjhegjnh",
              "payment": 5000,
              "paymentDate": "2023-12-15T23:59:59.999Z"
            },
            {
              "isCompleted": false,
              "_id": "656c1e2efb59310dec32ae32",
              "heading": "Heading",
              "payment": 4000,
              "status": "In Progress",
              "paymentDate": null,
              "dueDate": "2023-12-31T23:59:59.999Z",
              "description": "Lorem ipsum doler admit fdghfjvsdnnjf sgjnsfgdkb df gdfsbij edsfgjk",
              "subMilestones": []
            },
            {
              "isCompleted": false,
              "_id": "656c1e2efb59310dec32ae33",
              "heading": "Milestone 3",
              "payment": 6000,
              "status": "Not Started",
              "paymentDate": null,
              "dueDate": "2023-12-24T23:59:59.999Z",
              "description": "Lorem ipsum doler admit fdghfjvsdnnjf sgjnsfgdkb df gdfsbij edsfgjk",
              "subMilestones": []
            }
          ],
          "userAgreement": {
            "_id": "65684d682dd359919a8da9b3"
          },
          "assignedTeam": {
            "availability": {
              "preferredTimeZone": "UTC-07:00",
              "daysAvailable": [
                "Weekdays"
              ],
              "startTime": "09:00 AM",
              "endTime": "05:00 PM",
              "whichDays": [
                "Mon",
                "Wed",
                "Fri"
              ]
            },
            "teamName": "Tech Innovators",
            "teamTagline": "Transforming Ideas into Reality",
            "teamIntroduction": "We are a dynamic team of innovators passionate about creating cutting-edge solutions.",
            "service": [
              "Service1",
              "Service3"
            ],
            "languagesSupported": [
              "English",
              "French",
              "Spanish"
            ],
            "tools": [
              "Tool1",
              "Tool3",
              "Tool5"
            ],
            "skills": [
              "Skill2",
              "Skill4",
              "Skill5"
            ],
            "teamUrl": "https://example.com/tech-innovators",
            "proposal": {
              "proposalScore": 85,
              "acceptanceProbability": 0.75,
              "bidAmount": 6000,
              "startDate": "2023-12-01T10:00:00.000Z",
              "milestones": [
                {
                  "name": "Milestone 1",
                  "deliverableDetails": "Prototype development",
                  "description": "Create a functional prototype for the project.",
                  "_id": "65660d5bf18e431b5603d6b1"
                },
                {
                  "name": "Milestone 2",
                  "deliverableDetails": "Integration testing",
                  "description": "Conduct integration testing to ensure seamless functionality.",
                  "_id": "65660d5bf18e431b5603d6b2"
                }
              ],
              "files": [
                {
                  "type": "Buffer",
                  "data": [
                    112,
                    114,
                    111,
                    112,
                    111,
                    115,
                    97,
                    108,
                    45,
                    100,
                    111,
                    99,
                    46,
                    112,
                    100,
                    102
                  ]
                },
                {
                  "type": "Buffer",
                  "data": [
                    109,
                    105,
                    108,
                    101,
                    115,
                    116,
                    111,
                    110,
                    101,
                    45,
                    49,
                    45,
                    100,
                    111,
                    99,
                    46,
                    112,
                    100,
                    102
                  ]
                }
              ],
              "_id": "65660d5bf18e431b5603d6b0"
            },
            "teamUserMap": [
              {
                "user": "656af2a4acba1f116ca953e6",
                "role": "Leader",
                "status": "Approved",
                "_id": "65660d5bf18e431b5603d6b3"
              },
              {
                "_id": "656c1e2ffb59310dec32ae3a",
                "user": "656b678eaa8a02c5c87c8d89",
                "role": "Member",
                "status": "Not Approved"
              },
              {
                "_id": "656c1e2ffb59310dec32ae3b",
                "user": "65660aa5f18e431b5603d698",
                "role": "Member",
                "status": "Approved"
              }
            ],
            "project": "65684d682dd359919a8da9af"
          },
          "assignedBy": {
            "currentAddress": {
              "streetAddress": "123 Main St",
              "houseNumber": "Apt 4",
              "zipCode": "12345",
              "country": "USA",
              "state": "CA",
              "city": "San Francisco"
            },
            "expertise": {
              "tools": [
                "Figma",
                "Sketch"
              ],
              "certificates": [
                "UX Certification"
              ],
              "skills": [
                "Wireframing",
                "Prototyping"
              ]
            },
            "fees": {
              "preferredCurrency": "USD",
              "hourlyRate": 50
            },
            "_id": "65684b792dd359919a8da979",
            "name": "Client 1",
            "avatarUrl": "https://www.text-image.com/samples/per_normal_face.jpg",
            "mobileNumber": "9234567890",
            "email": "user@example.com",
            "tagline": "UX/UI Designer",
            "workExperienceYears": 3,
            "workExperienceMonths": 6,
            "professionalIntroduction": "Passionate designer with a focus on user-centric solutions.",
            "domain": "UX/UI Designer",
            "role": "Client",
            "languages": [
              "English",
              "French"
            ],
            "companyName": "ABC Corp",
            "sectorName": "Technology",
            "educationDetails": [
              {
                "nameOfCollegeOrUniversity": "University of Design",
                "degree": "Bachelors in Design",
                "_id": "65684b792dd359919a8da97a"
              }
            ],
            "preferredTimeZone": "PST",
            "daysAvailable": "Weekdays",
            "availableDays": [
              "Mon",
              "Wed",
              "Fri"
            ],
            "startTime": "9:00 AM",
            "endTime": "5:00 PM",
            "socialMedia": [
              {
                "description": "LinkedIn",
                "url": "https://www.linkedin.com/in/johndoe/",
                "_id": "65684b792dd359919a8da97b"
              },
              {
                "description": "Behance",
                "url": "https://www.behance.net/johndoe/",
                "_id": "65684b792dd359919a8da97c"
              }
            ],
            "projects": [
              "6566191df6c040e25b84e5fc",
              "65661281749c5f585ddbf19c"
            ],
            "lastLogin": "2023-01-15T12:30:00.000Z",
            "paymentsCompleted": 10,
            "projectsPosted": 5,
            "rating": 4.5,
            "createdAt": "2023-11-30T08:44:41.399Z",
            "updatedAt": "2023-11-30T08:44:41.399Z",
            "__v": 0,
            "institute": "IIT Bombay"
          },
          "logo": "https://example.com/logo.png",
          "health": {
            "progress": 0,
            "_id": "65684d682dd359919a8da9b4"
          },
          "startDate": "2023-11-01T00:00:00.000Z",
          "endDate": "2024-01-01T23:59:59.999Z",
          "clientRequirements": {
            "paymentType": "Fixed",
            "payment": 5000,
            "workDays": [
              "Mon",
              "Wed",
              "Fri"
            ],
            "requiredTools": [
              "Engineering"
            ],
            "files": [
              {
                "type": "Buffer",
                "data": [
                  0,
                  0
                ]
              }
            ],
            "_id": "65684d682dd359919a8da9b8"
          },
          "work": {
            "fileType": "file",
            "file": {
              "type": "Buffer",
              "data": [
                98,
                97,
                115,
                101,
                54,
                52,
                95,
                101,
                110,
                99,
                111,
                100,
                101,
                100,
                95,
                102,
                105,
                108,
                101,
                95,
                99,
                111,
                110,
                116,
                101,
                110,
                116,
                95,
                104,
                101,
                114,
                101
              ]
            },
            "_id": "65684d682dd359919a8da9b9"
          },
          "duration": 30,
          "domain": "example.com",
          "postedOn": "2023-11-15T12:00:00.000Z",
          "status": "In Review",
          "location": "Remote",
          "connectedApps": [
            {
              "_id": "656c1e2efb59310dec32ae34",
              "tool": "data:image/png;base64,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",
              "url": "https://www.figma.com/",
              "connectedOn": "2023-12-01T12:36:00.000Z",
              "connectedBy": "65684b792dd359919a8da979"
            }
          ],
          "activities": [
            {
              "submilestone": {
                "title": "Planning",
                "isCompleted": false,
                "status": "Not Started",
                "dueDate": "2023-11-30T23:59:59.999Z",
                "assignedTo": "6560d7235a1a92bb3912e4ac",
                "description": "Plan the project activities",
                "startDate": null,
                "endDate": null,
                "Aitools": [
                  [
                    "Engineering"
                  ]
                ],
                "connectedApps": [
                  [
                    "Figma",
                    "http://figma.com"
                  ]
                ],
                "work": {
                  "fileType": "file",
                  "file": "YmFzZTY0X2VuY29kZWRfZmlsZV9jb250ZW50X2hlcmU=",
                  "_id": "65684d682dd359919a8da9b7"
                },
                "stickyNotes": [
                  "Note 1",
                  "Note 2"
                ],
                "_id": "65684d682dd359919a8da9b6"
              },
              "type": "CREATE",
              "timestamp": "2023-11-15T12:34:56.789Z",
              "user": "6560d7235a1a92bb3912e4ac",
              "message": "Submilestone 'Planning' created.",
              "_id": "65684d682dd359919a8da9b5"
            },
            {
              "submilestone": {
                "title": "Sample SubMilestone",
                "isCompleted": false,
                "status": "In Progress",
                "dueDate": "2023-12-31T23:59:59.999Z",
                "assignedTo": "6560d7235a1a92bb3912e4ac",
                "description": "This is a sample sub-milestone description.",
                "startDate": "2023-12-01T00:00:00.000Z",
                "endDate": "2023-12-15T23:59:59.999Z",
                "Aitools": [
                  {
                    "tool": "Figma",
                    "url": "http://figma.com",
                    "connectedOn": "2023-12-01T12:36:00.000Z",
                    "connectedBy": "6560d7235a1a92bb3912e4ac"
                  }
                ],
                "work": {
                  "fileType": "file",
                  "file": "<Binary Data>"
                },
                "stickyNotes": [
                  "Note 1: Remember to complete task A."
                ]
              },
              "type": "CREATE",
              "timestamp": "2023-12-01T14:30:00.000Z",
              "user": "6560d7235a1a92bb3912e4ac",
              "message": "User created a new sub-milestone."
            }
          ],
          "activity": []
        }
      ]

    const test_client_Id = "65684b792dd359919a8da979";
    const[projectData, setProjectData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/clientprojects?clientId=${test_client_Id}`);
                setProjectData(response.data);
                console.log(`Data is:`, response.data);
            } catch (error) {
                console.error("Error is:", error);
            }
        };
        fetchData(); // Call the async function
    }, []);

    const duration = projectData && projectData.filter((ele) => ele.assignedTeam.teamName === teamName)
    .map((ele) => {
        return ele.duration
    })

    const milestone = projectData && projectData.filter((ele) => ele.assignedTeam.teamName === teamName).map((ele) => {
        return ele.assignedTeam.proposal && ele.assignedTeam.proposal.milestones.map((ele2) => {
            return ele2
        })
    });

    console.log("milestones are:",milestone);

    console.log("my team name is:", duration)

    return (
        <div className="p-8 w-[75%]">
            <div className="flex justify-between">
                <div className="flex flex-row">
                    <img src="" alt="" />
                    <h1 className="text-2x1 text-black font-semibold text-2xl">{teamName}</h1>
                </div>
                <h1 className="text-2xl text-black font-semibold">4.1/5.0</h1>
            </div>
            <div className="flex flex-col p-8 bg-blue-100 rounded-md mt-6">
                <h1 className="text-2xl text-black font-semibold">Bid Details</h1>
                <div className="flex justify-between">
                    <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                        <div className="flex flex-row mr-20">
                            <h1 className="text-2x1 text-black font-semibold mr-2">Total Bid Amount</h1>
                            <div className="pt-1">
                                <img className="h-4" src="/Images/info-circle.png" alt="" />
                            </div>
                        </div>
                        <div className="text-back text-2xl font-semibold">${bidAmount}</div>
                    </div>
                    <div className="flex justify-between flex-nowrap bg-white px-10 py-4 rounded-md">
                        <div className="flex flex-row mr-20">
                            <h1 className="text-2x1 text-black font-semibold mr-2">Expected Duration</h1>
                            <div className="pt-1">
                                <img className="h-4" src="/Images/info-circle.png" alt="" />
                            </div>
                        </div>
                        <div className="text-back text-2xl font-semibold">{duration} Weeks</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-blue-100 rounded-md p-8 mt-6">
                <h1 className=" text-black text-2xl font-semibold">Milestone Details</h1>
                <div className="flex flex-col mt-4">
                    <div className="flex justify-between bg-blue-900 px-5 py-3">
                        <h1 className="text-white text-1xl font-semibold">Sr. No</h1>
                        <h1 className="text-white text-1xl font-semibold">Milestone Name</h1>
                        <h1 className="text-white text-1xl font-semibold">Milestone Amount</h1>
                        <h1 className="text-white text-1xl font-semibold">Duration</h1>
                        <h1 className="text-white text-1xl font-semibold">View</h1>
                    </div>
                    
                    {
                        milestone && milestone.map((ele) => {
                            console.log("milestone element is:",ele)
                            return <div>
                                {ele.map((ele) => {
                                    return <div className="flex justify-between py-5 px-9 bg-white">
                                    <h1 className="text-black text-1xl font-semibold">1</h1>
                                    <h1 className="text-black text-1xl font-semibold">{ele.name}</h1>
                                    <h1 className="text-black text-1xl font-semibold">6387</h1>
                                    <h1 className="text-black text-1xl font-semibold">jekswiue</h1>
                                    <img src="/Images/eye.svg" alt="" />
                                </div>
                                })}
                             
                            </div>
                        })
                    }
                    
                    <hr className="w-[100%]"/>
                </div>
            </div>
        </div>   
    )
}

export default ClientProjectComponent;