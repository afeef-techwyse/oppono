import Root from './Root';
import StepsProgress from './components/form-components/StepsProgress';

export default {
  name: 'oppono-theme',
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      activeTheme: 'blue-theme',
      selectedValues: {},
      subHeader: {part_1: '', part_2: ''},
      activeStep: {stepName: 'activeStepName', total: 1000, current: 0},
    },
  },
  actions: {
    theme: {
      setActiveTheme: ({state}) => value => {
        value && (state.theme.activeTheme = value);
      },
      setSelectedValues: ({state}) => value => state.theme.selectedValues = {...state.theme.selectedValues, ...value},
      setSubHeader: ({state}) => value => state.theme.subHeader = {...state.theme.subHeader, ...value},
      setActiveStep: ({state}) => value => state.theme.activeStep = {...state.theme.activeStep, ...value},
    },
  },
};
