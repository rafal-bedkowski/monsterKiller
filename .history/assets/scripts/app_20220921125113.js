const ATTACK_VALUE = 10;
let chosenMaxLife = 100;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener('click', attackHandler);
