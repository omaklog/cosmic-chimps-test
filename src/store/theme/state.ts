export interface ThemeState {
    dark: boolean;
}

function state(): ThemeState {
    return {
        dark: false,
    }
}

export default state;
