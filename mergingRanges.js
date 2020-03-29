// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// your function would return:

//   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

const ranges = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

function mergeRanges(rangesArr) {
  const meetingsCopy = JSON.parse(JSON.stringify(rangesArr));
  
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  });
  
  const combinedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = combinedMeetings[combinedMeetings.length - 1];

    if (currentMeeting.startTime > lastMergedMeeting.endTime) {
      combinedMeetings.push(currentMeeting);
    } else {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
    }
  }

  return combinedMeetings;
};