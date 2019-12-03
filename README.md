# Advent of code 2019

This is me doing the advent of code challenges 2019.

## Setup and usage

We use yarn for this repo. Make sure to run `yarn` before starting so dependencies are pulled in.

You can then run `yarn start <day>-[part]` to run the code for a specific part of a day.

To run the first part of day one simply run `yarn start 1`, for part two run `yarn start 1-2`.

## Organization

CHallenges are organized into folders where each day gets it's folder in "Challenges" folloing the format of `Day[0][number of day]`. Using a leading 0 for days below 10. Within the folder for each day three files are common, those are:

- `day[day]-1.ts - For the first part of this day.
- `day[day]-2.ts - For the second part of this day.
- `input.txt` - My input for the given day.

Note that here we do not use leading 0s.

The folders for each day may also contain additional files, like tests.
