import React from 'react';

export const initialState = { themeMode: 'light' };
export function ThemeReducer(
  state: { themeMode: string },
  action: { type: string; payload: string }
) {
  const { payload } = action;
  switch (action.type) {
    case 'set-theme':
      return { ...state, themeMode: payload === 'light' ? 'light' : 'dark' };
    default:
      return state;
  }
}

// added null in the create context so that tsc issues are fixed. Refer https://stackoverflow.com/questions/54577865/react-createcontext-issue-in-typescript/54667477
export const ThemeReducerContext = React.createContext({
  ThemeState: { themeMode: 'light' },
  dispatch: ({ type, payload }) => {},
});
