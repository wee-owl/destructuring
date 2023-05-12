export default function showSpecialAttacks(object) {
  if (object.special === undefined) {
    throw new Error('No special attack options available');
  }

  const result = [];

  object.special.forEach(({
    id, name, description = 'Описание недоступно', icon,
  }) => {
    result.push({
      id, name, description, icon,
    });
  });

  return result;
}
