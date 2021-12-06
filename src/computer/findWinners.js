const $result = document.querySelector('#app > h4:nth-child(6)');

function getWinners(cars) {
  let maxCount = 0;
  let winners = [];

  cars.forEach(car => {
    if (car.count > maxCount) {
      maxCount = car.count;
      winners = [car.name];
    } else if (car.count === maxCount) {
      winners.push(` ${car.name}`);
    }
  });
  return winners;
}

function printWinners(winners) {
  $result.insertAdjacentHTML(
    'beforeend',
    `<br><span id="racing-winners">최종 우승자: ${winners}</span>`
  );
}

export default function findWinners(cars) {
  const winners = getWinners(cars);
  printWinners(winners);
}
