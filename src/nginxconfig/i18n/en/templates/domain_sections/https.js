/*
Copyright 2021 DigitalOcean

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
    enableEncryptedSslConnection: `${common.enable} encrypted ${common.ssl} connections`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 connections`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 connections`,
    forceHttps: `Force ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, requiring HTTPS connections`,
    enableIncludeSubDomains: `${common.enable} includeSubDomains directive, requiring HTTPS connections for ALL subdomains`,
    enablePreload: `${common.enable} preload directive, telling browsers to always make HTTPS connections only`,
    certificationType: 'Certification type',
    customCertificate: 'Custom certificate',
    letsEncryptEmail: `${common.letsEncrypt} email`,
    http3IsANonStandardModule: 'HTTP/3 isn\'t a standard NGINX module, check the ',
    http3NginxQuicReadme: 'NGINX QUIC readme',
    http3OrThe: ' or the ',
    http3CloudflareQuicheProject: 'Cloudflare quiche project',
    http3ForBuildingNginxWithHttp3: ' for how to build NGINX with HTTP/3!',
};
