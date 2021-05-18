const names = {
  first: 'First mortgage',
  second: 'Second mortgage',
  heloc: 'HELOC',
  beloc: 'BELOC',
}
export function productTypeToFullName(type) {return names[type];}
