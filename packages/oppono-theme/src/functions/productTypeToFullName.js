const names = {
  first: 'First Mortgage',
  second: 'Second Mortgage',
  heloc: 'HELOC',
  beloc: 'BELOC',
}
export function productTypeToFullName(type) {return names[type];}