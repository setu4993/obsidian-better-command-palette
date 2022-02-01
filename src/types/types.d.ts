import {
    PluginSettingTab, Plugin, Command, Hotkey, MetadataCache, App, SuggestModal,
} from 'obsidian';
import { OrderedSet } from 'src/utils';

export interface BetterCommandPaletteInterface extends Plugin {
    settings: PluginSettingTab;

    prevCommands: OrderedSet<Match>;

    prevFiles: OrderedSet<Match>;

    prevTags: OrderedSet<Match>;

    suggestionsWorker: Worker;
}

export interface Comparable {
    value: () => string;
}

export interface Match extends Comparable {
    text: string,
    id: string,
}

// Unsafe Interfaces
// Ideally we would not have to use these, but as far as I can tell
// they are the only way for certain functionality.
// Copied this pattern from Another Quick Switcher: https://github.com/tadashi-aikawa/obsidian-another-quick-switcher/blob/master/src/ui/AnotherQuickSwitcherModal.ts#L109

export interface UnsafeSuggestModalInterface extends SuggestModal<Match> {
    chooser: {
        useSelectedItem(ev: Partial<KeyboardEvent>): void;
    }
    updateSuggestions(): void;
}

interface UnsafeMetadataCacheInterface extends MetadataCache {
    getCachedFiles(): string[],
}

export interface UnsafeAppInterface extends App {
    commands: {
        listCommands(): Command[],
        findCommand(id: string): Command,
        executeCommandById(id: string): void,
    },
    hotkeyManager: {
        getHotkeys(id: string): Hotkey[],
        getDefaultHotkeys(id: string): Hotkey[],
    },
    metadataCache: UnsafeMetadataCacheInterface,
    internalPlugins: {
        getPluginById(id: string): { instance: { options: { pinned: [] } } },
    }
}