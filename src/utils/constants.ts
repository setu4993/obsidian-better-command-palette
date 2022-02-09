export const QUERY_OR = '||';

export const HYPER_KEY_MODIFIERS_SET = new Set(['Alt', 'Ctrl', 'Mod', 'Shift']);

export const BASIC_MODIFIER_ICONS = {
    Mod: 'Ctrl +',
    Ctrl: 'Ctrl +',
    Meta: 'Win +',
    Alt: 'Alt +',
    Shift: 'Shift +',
    Hyper: 'Caps +',
};

export const MAC_MODIFIER_ICONS = {
    Mod: '⌘',
    Ctrl: '^',
    Meta: '⌘',
    Alt: '⌥',
    Shift: '⇧',
    Hyper: '⇪',
};

export const SPECIAL_KEYS: Record<string, string> = {
    TAB: '↹',
    ENTER: '↵',
    ARROWLEFT: '←',
    ARROWRIGHT: '→',
    ARROWUP: '↑',
    ARROWDOWN: '↓',
    BACKSPACE: '⌫',
    ESC: 'Esc',
};

export const MACRO_COMMAND_ID_PREFIX = 'obsidian-better-command-palette-macro-';
