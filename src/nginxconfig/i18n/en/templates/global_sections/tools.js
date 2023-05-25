/*
Copyright 2020 DigitalOcean

This code is licensed under the MIT License.
You may obtain a copy of the License at
https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE or https://mit-license.org/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions :

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import common from '../../common';

export default {
    modularizedStructure: 'Modularized structure',
    enableModularizedConfigFiles: `${common.enable} modularized config files`,
    symlinkVhost: 'Symlink vhost',
    enableSymLinksFrom: `${common.enable} symlinks from`,
    to: 'to',
    shareConfiguration: 'Share configuration',
    resetConfiguration: 'Reset configuration',
    resetGlobalConfig: 'Reset global config',
    resetAllDomains: 'Reset all domains',
    removeAllDomains: 'Remove all domains',
    resetAllDomainsConfig: 'Reset all domain configs',
    resetDomainConfig: 'Reset domain config',
    removeDomain: 'Remove domain',
    yesImSure: 'Yes, I\'m sure',
    noCancel: 'No, cancel',
    tools: 'Tools',
    resetGlobalConfigBody: 'Are you sure you want to reset all configuration options in the global config section?',
    resetAllDomainsConfigBody: 'Are you sure you want to reset the configuration of ALL domains?',
    removeAllDomainsBody: 'Are you sure you want to remove ALL domain configurations?',
    areYouSureYouWantToResetAllConfigurationOptionsForThe: 'Are you sure you want to reset all configuration options for the',
    domain: 'domain?',
    areYouSureYouWantToRemoveThe: 'Are you sure you want to remove the ',
    domainConfiguration: 'domain configuration?',
};
