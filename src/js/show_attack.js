/* eslint-disable no-undef */
export default function showSpecialAttacks({ special }) {
  if (special === undefined) {
    throw new Error('No special attack options available');
  }

  const result = [];

  special.forEach(({
    id, name, description = 'Описание недоступно', icon,
  }) => {
    result.push({
      id, name, description, icon,
    });
  });

  return result;
}
