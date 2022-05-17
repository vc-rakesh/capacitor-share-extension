import { WebPlugin } from '@capacitor/core';
import { ShareExtensionPlugin } from './definitions';
export declare class ShareExtensionWeb extends WebPlugin implements ShareExtensionPlugin {
    constructor();
    saveDataToKeychain(options: {
        key: string;
        data: any;
    }): Promise<string>;
    clearKeychainData(options: {
        key: string;
    }): Promise<any>;
}
declare const ShareExtension: ShareExtensionWeb;
export { ShareExtension };
