$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stories/CreateAndDeleteEntries.feature");
formatter.feature({
  "id": "hotel-booking-create-\u0026-delete-entry",
  "tags": [
    {
      "name": "@testme",
      "line": 1
    }
  ],
  "description": "",
  "name": "Hotel Booking Create \u0026 Delete Entry",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry",
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am a on etsy page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for \"sport shoes\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I select \"sport shoes\" and hit search",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I sort by \"Lowest Price\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I print top 10 items price",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "Etsy.i_am_on_etsy_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("stories/CreateMultipleEntriees.feature");
formatter.feature({
  "id": "hotel-booking---multiple-entries",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "Hotel Booking - Multiple Entries",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry",
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"\u003cHotelName\u003e\", \"\u003cAddress\u003e\",\"\u003cOwner\u003e\",\"\u003cPhoneNumber\u003e\",\"\u003cEmail\u003e\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.examples({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 10,
  "rows": [
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;1",
      "cells": [
        "HotelName",
        "Address",
        "Owner",
        "PhoneNumber",
        "Email"
      ],
      "line": 11
    },
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;2",
      "cells": [
        "Siva2",
        "London2",
        "Sirigiri2",
        "1234567892",
        "test2@test2.com"
      ],
      "line": 12
    },
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;3",
      "cells": [
        "Siva3",
        "London3",
        "Sirigiri3",
        "1234567893",
        "test3@test3.com"
      ],
      "line": 13
    },
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;4",
      "cells": [
        "Siva4",
        "London3",
        "Sirigiri3",
        "1234567893",
        "test3@test3.com"
      ],
      "line": 14
    },
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;5",
      "cells": [
        "Siva5",
        "London3",
        "Sirigiri3",
        "1234567893",
        "test3@test3.com"
      ],
      "line": 15
    },
    {
      "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;6",
      "cells": [
        "Siva6",
        "London3",
        "Sirigiri3",
        "1234567893",
        "test3@test3.com"
      ],
      "line": 16
    }
  ]
});
formatter.scenario({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;2",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"Siva2\", \"London2\",\"Sirigiri2\",\"1234567892\",\"test2@test2.com\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;3",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"Siva3\", \"London3\",\"Sirigiri3\",\"1234567893\",\"test3@test3.com\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;4",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"Siva4\", \"London3\",\"Sirigiri3\",\"1234567893\",\"test3@test3.com\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;5",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"Siva5\", \"London3\",\"Sirigiri3\",\"1234567893\",\"test3@test3.com\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "hotel-booking---multiple-entries;verifying-create-and-delete-entry;;6",
  "tags": [
    {
      "name": "@Regression",
      "line": 1
    }
  ],
  "description": "",
  "name": "verifying create and delete entry",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I fill the hotel details as \"Siva6\", \"London3\",\"Sirigiri3\",\"1234567893\",\"test3@test3.com\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "I click on Create button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("stories/DeleteEntries.feature");
formatter.feature({
  "id": "hotel-booking---delete-all-entries",
  "tags": [
    {
      "name": "@DeleteEntry",
      "line": 1
    }
  ],
  "description": "",
  "name": "Hotel Booking - Delete All Entries",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "hotel-booking---delete-all-entries;verifying-delete-all-entries",
  "description": "",
  "name": "verifying delete all entries",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I delete all entries",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should see zero records in the page",
  "keyword": "Then ",
  "line": 7
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});