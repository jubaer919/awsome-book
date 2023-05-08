export default function dateAndTime() {
  // Get the current local time and date
  const now = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const formattedTime = now.toLocaleDateString('en-US', options);

  const localTimeElement = document.querySelector('.date-time');
  localTimeElement.innerHTML = formattedTime;
}