import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


interface Config {
  readonly title: string;
  readonly reportName: string;
  readonly faviconUrl: string;
  readonly allureImage: string;
}

interface CustomizationResults {
  indexHtml: boolean;
  stylesCss: boolean;
  appJs: boolean;
  summaryJson: boolean;
}

type CustomizeFn = () => boolean;



const CONFIG: Config = {
  title: 'Gritsa',
  reportName:'Gritsa-Report',
  faviconUrl:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHcml0c2EgTG9nbyDigJQgRHVhbCBUb25lIEJsYWNrICYgR3JleSAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtbGFiZWw9IkdyaXRzYSBMb2dvIiByb2xlPSJpbWciPgogIDxkZWZzPgoKICAgIDwhLS0gRGVlcCBibGFjayBiYWNrZ3JvdW5kIC0tPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZ0dyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTgxODE4Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzExMTExMSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KCiAgICA8IS0tIEcgbWFyazogbGlnaHQgZ3JleSB0byBtaWQtZ3JleSAtLT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ0dyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojRDRENEQ0Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzhBOEE4QSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KCiAgICA8IS0tIFdvcmRtYXJrOiBzbGlnaHRseSBsaWdodGVyIGdyZXkgLS0+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InRleHRHcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQkJCQkIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOTk5OTk5Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgoKICAgIDwhLS0gVmVyeSBzdWJ0bGUgc29mdCBnbG93IGp1c3QgdG8gbGlmdCB0aGUgRyBvZmYgdGhlIGJhY2tncm91bmQgLS0+CiAgICA8ZmlsdGVyIGlkPSJzb2Z0TGlmdCIgeD0iLTMwJSIgeT0iLTMwJSIgd2lkdGg9IjE2MCUiIGhlaWdodD0iMTYwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMi41IiByZXN1bHQ9ImJsdXIiLz4KICAgICAgPGZlRmxvb2QgZmxvb2QtY29sb3I9IiNjY2NjY2MiIGZsb29kLW9wYWNpdHk9IjAuMTUiIHJlc3VsdD0iZ2xvd0NvbG9yIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iZ2xvd0NvbG9yIiBpbjI9ImJsdXIiIG9wZXJhdG9yPSJpbiIgcmVzdWx0PSJnbG93Ii8+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iZ2xvdyIvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KCiAgICA8IS0tIENsaXAgdG8gcm91bmRlZCBzcXVhcmUgLS0+CiAgICA8Y2xpcFBhdGggaWQ9InNxdWFyZUNsaXAiPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjIwIiByeT0iMjAiLz4KICAgIDwvY2xpcFBhdGg+CgogIDwvZGVmcz4KCiAgPCEtLSA9PT0gQkFDS0dST1VORCA9PT0gLS0+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgcnk9IjIwIiBmaWxsPSJ1cmwoI2JnR3JhZCkiLz4KCiAgPCEtLSBWZXJ5IHN1YnRsZSBpbm5lciBib3JkZXIgLS0+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyMCIgcnk9IjIwIgogICAgICAgIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CgogIDwhLS0gPT09IEcgTEVUVEVSRk9STSA9PT0KICAgIENlbnRlcjogKDQ5LCA0NSkKICAgIE91dGVyIHJhZGl1czogMjkgIElubmVyIHJhZGl1czogMTgKICAgIE9wZW5pbmcgYXQgfsKxNTLCsCBvbiB0aGUgcmlnaHQgc2lkZQogICAgCiAgICBjb3MoNTLCsCk9MC42MTU3ICBzaW4oNTLCsCk9MC43ODgwCiAgICBPdXRlciB0b3Agb3BlbjogICAgKDY2Ljg1LCAyMi4xNSkKICAgIE91dGVyIGJvdHRvbSBvcGVuOiAoNjYuODUsIDY3Ljg1KQogICAgSW5uZXIgdG9wIG9wZW46ICAgICg2MC4wOCwgMzAuODIpCiAgICBJbm5lciBib3R0b20gb3BlbjogKDYwLjA4LCA1OS4xOCkKICAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc29mdExpZnQpIj4KICAgIDxwYXRoCiAgICAgIGQ9IgogICAgICAgIE0gNjYuODUsMjIuMTUKICAgICAgICBBIDI5LDI5IDAgMSwwIDY2Ljg1LDY3Ljg1CiAgICAgICAgTCA2Ni44NSw1NgogICAgICAgIEwgNTIsNTYKICAgICAgICBMIDUyLDQ3CiAgICAgICAgTCA2Ni44NSw0NwogICAgICAgIEwgNjYuODUsMzkKICAgICAgICBBIDI5LDI5IDAgMCwwIDY2Ljg1LDIyLjE1CiAgICAgICAgWgogICAgICAgIE0gNjAuMDgsMzAuODIKICAgICAgICBBIDE4LDE4IDAgMSwxIDYwLjA4LDU5LjE4CiAgICAgICAgTCA2MC4wOCw1NgogICAgICAgIEwgNTgsNTYKICAgICAgICBMIDU4LDQ3CiAgICAgICAgTCA2MC4wOCw0NwogICAgICAgIEwgNjAuMDgsMzYKICAgICAgICBBIDE4LDE4IDAgMCwwIDYwLjA4LDMwLjgyCiAgICAgICAgWgogICAgICAiCiAgICAgIGZpbGw9InVybCgjZ0dyYWQpIgogICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAvPgogIDwvZz4KCiAgPCEtLSA9PT0gVEhJTiBESVZJREVSID09PSAtLT4KICA8cmVjdCB4PSIyMiIgeT0iODIuNSIgd2lkdGg9IjU2IiBoZWlnaHQ9IjAuNiIgcng9IjAuMyIgZmlsbD0iIzQ0NDQ0NCIvPgoKICA8IS0tID09PSBXT1JETUFSSyA9PT0gLS0+CiAgPHRleHQKICAgIHg9IjUwIgogICAgeT0iOTEuNSIKICAgIGZvbnQtZmFtaWx5PSInUGFsYXRpbm8gTGlub3R5cGUnLCAnQm9vayBBbnRpcXVhJywgJ1BhbGF0aW5vJywgR2VvcmdpYSwgc2VyaWYiCiAgICBmb250LXNpemU9IjcuOCIKICAgIGZvbnQtd2VpZ2h0PSI0MDAiCiAgICBsZXR0ZXItc3BhY2luZz0iNSIKICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiCiAgICBmaWxsPSJ1cmwoI3RleHRHcmFkKSIKICAgIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiCiAgPkdSSVRTQTwvdGV4dD4KCjwvc3ZnPg==',
  allureImage:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NiIgaGVpZ2h0PSI3NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNTIuOCAxMS4wNzFhOC41NSA4LjU1IDAgMCAxIDEyLjA5Mi4wODRjNi43OCA2Ljg3NCAxMS4wNzEgMTYuMzUzIDExLjA3MSAyNi44MjZhOC41NSA4LjU1IDAgMSAxLTE3LjEgMGMwLTUuNzE0LTIuMzMtMTAuOTUtNi4xNDYtMTQuODE4YTguNTUgOC41NSAwIDAgMSAuMDg0LTEyLjA5MiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjkuNDMyIDguNTVBOC41NSA4LjU1IDAgMCAxIDM3Ljk4MiAwYzEwLjQ3MyAwIDE5Ljk1MiA0LjI5MSAyNi44MjYgMTEuMDcxQTguNTUgOC41NSAwIDAgMSA1Mi44IDIzLjI0NmMtMy44NjgtMy44MTUtOS4xMDQtNi4xNDYtMTQuODE4LTYuMTQ2YTguNTUgOC41NSAwIDAgMS04LjU1LTguNTUiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9InVybCgjYykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzcuOTgxQzAgMTcgMTYuOTk5IDAgMzcuOTgxIDBhOC41NSA4LjU1IDAgMCAxIDAgMTcuMUMyNi40NDMgMTcuMSAxNy4xIDI2LjQ0MyAxNy4xIDM3Ljk4MWMwIDUuNzE0IDIuMzMgMTAuOTUgNi4xNDYgMTQuODJhOC41NSA4LjU1IDAgMCAxLTEyLjE3NSAxMi4wMDdDNC4yOTEgNTcuOTM0IDAgNDguNDU1IDAgMzcuOTgxIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSJ1cmwoI2QpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4wNzEgNTIuOGE4LjU1IDguNTUgMCAwIDEgMTIuMDkxLS4wODNjMy44NjkgMy44MTUgOS4xMDUgNi4xNDYgMTQuODIgNi4xNDZhOC41NSA4LjU1IDAgMCAxIDAgMTcuMWMtMTAuNDc0IDAtMTkuOTUzLTQuMjkxLTI2LjgyNy0xMS4wNzFBOC41NSA4LjU1IDAgMCAxIDExLjA3IDUyLjgiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY3LjQxMyAyOS40MzFhOC41NSA4LjU1IDAgMCAxIDguNTUgOC41NWMwIDIwLjk4My0xNi45OTggMzcuOTgyLTM3Ljk4MSAzNy45ODJhOC41NSA4LjU1IDAgMCAxIDAtMTcuMWMxMS41MzggMCAyMC44ODEtOS4zNDMgMjAuODgxLTIwLjg4MmE4LjU1IDguNTUgMCAwIDEgOC41NS04LjU1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSJ1cmwoI2YpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ny40MTMgMjkuNDMxYTguNTUgOC41NSAwIDAgMSA4LjU1IDguNTV2MjkuNDMyYTguNTUgOC41NSAwIDAgMS0xNy4xIDBWMzcuOThhOC41NSA4LjU1IDAgMCAxIDguNTUtOC41NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2cpIj48cGF0aCBmaWxsPSJ1cmwoI2gpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Mi44IDExLjA3MWE4LjU1IDguNTUgMCAwIDEgMTIuMDkyLjA4NGM2Ljc4IDYuODc0IDExLjA3MSAxNi4zNTMgMTEuMDcxIDI2LjgyNmE4LjU1IDguNTUgMCAxIDEtMTcuMSAwYzAtNS43MTQtMi4zMy0xMC45NS02LjE0Ni0xNC44MThhOC41NSA4LjU1IDAgMCAxIC4wODQtMTIuMDkyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNjIuNyIgeDI9IjY4LjQiIHkxPSIyMi44IiB5Mj0iMzUuNjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzdFMjJDRSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhCNUNGNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNjMuNjUiIHgyPSI0Mi4yNzUiIHkxPSIyMi4zMjUiIHkyPSI4LjU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0VGNDQ0NCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMjYyNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iOC41NSIgeDI9IjEyLjgyNSIgeTE9IjMzLjI1IiB5Mj0iNTguOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMyMkM1NUUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNTgwM0QiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjExLjQiIHgyPSIzNC4yIiB5MT0iNTIuNzI1IiB5Mj0iNjkuMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjOTRBM0I4Ii8+PHN0b3Agb2Zmc2V0PSIuOTU4IiBzdG9wLWNvbG9yPSIjNjQ3NDhCIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjQ3NDhCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSI2Ny40NSIgeDI9IjUyLjY5NyIgeTE9IjUyLjY2IiB5Mj0iNjcuNDEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0Q5NzcwNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZCQkYyNCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iNjkuMzUiIHgyPSI3Mi43MzUiIHkxPSIxMjkuMiIgeTI9IjEyOC44NTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImgiIHgxPSI2Mi43IiB4Mj0iNjguNCIgeTE9IjIyLjgiIHkyPSIzNS42MjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjN0UyMkNFIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01OC45IDI4LjVINzZ2MTlINTguOXoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=',
};


const ALLURE_REPORT_DIR = path.join(process.cwd(), 'allure-report');


function transformFile(
  filePath: string,
  transform: (content: string) => string
): boolean {
  if (!fs.existsSync(filePath)) {
    console.error(`  ✗ Not found: ${filePath}`);
    return false;
  }
  try {
    const original = fs.readFileSync(filePath, 'utf-8');
    const updated = transform(original);
    if (updated !== original) {
      fs.writeFileSync(filePath, updated, 'utf-8');
    }
    return true;
  } catch (err) {
    console.error(`  ✗ Error processing ${path.basename(filePath)}:`, (err as Error).message);
    return false;
  }
}

function replaceAll(content: string, search: string, replacement: string, label: string): string {
  if (!content.includes(search)) {
    console.warn(`  ⚠ "${search}" not found — skipping ${label}`);
    return content;
  }
  console.log(`  ✓ ${label}`);
  return content.split(search).join(replacement);
}

// ─── Customization Steps ──────────────────────────────────────────────────────

function customizeIndexHtml(): boolean {
  const filePath = path.join(ALLURE_REPORT_DIR, 'index.html');

  return transformFile(filePath, (content) => {
    content = content.replace(/<title>.*?<\/title>/i, `<title>${CONFIG.reportName}</title>`);
    console.log('  ✓ <title> replaced');

    const newFavicon = `<link rel="icon" href="${CONFIG.faviconUrl}">`;
    const faviconRegex = /<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*>/gi;

    if (faviconRegex.test(content)) {
      content = content.replace(faviconRegex, newFavicon);
      console.log('  ✓ Favicon replaced');
    } else {
      content = content.replace('</head>', `  ${newFavicon}\n</head>`);
      console.log('  ✓ Favicon injected');
    }

    return content;
  });
}

function customizeStylesCss(): boolean {
  const filePath = path.join(ALLURE_REPORT_DIR, 'styles.css');

  return transformFile(filePath, (content) => {
    content = replaceAll(content, CONFIG.allureImage, CONFIG.faviconUrl, 'Allure image → TTP image');

    content = content.replace(
      /\.side-nav\s*\{[^}]*\}/g,
      `.side-nav {
  background: #5b5e63;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  width: 180px;
}`
    );
    console.log('  ✓ .side-nav styles replaced');

    content = content.replace(
      /\.side-nav__head\s*\{[^}]*\}/g,
      `.side-nav__head {
  border-bottom: 1px solid #5b5e63;
  margin: 16px 0;
  padding-bottom: 5px;
}`
    );
    console.log('  ✓ .side-nav__head styles replaced');

    return content;
  });
}

function customizeAppJs(): boolean {
  const filePath = path.join(ALLURE_REPORT_DIR, 'app.js');

  return transformFile(filePath, (content) =>
    replaceAll(content, 'Allure', CONFIG.title, '"Allure" → "TTP" in app.js')
  );
}

function customizeSummaryJson(): boolean {
  const filePath = path.join(ALLURE_REPORT_DIR, 'widgets/summary.json');

  return transformFile(filePath, (content) =>
    replaceAll(content, 'Allure', CONFIG.title, '"Allure" → "TTP" in summary.json')
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main(): void {
  console.log('\n┌─ Allure Report Customization ─────────────────────────┐\n');

  if (!fs.existsSync(ALLURE_REPORT_DIR)) {
    console.error('  ✗ allure-report directory not found.');
    console.log('  Run: npx allure generate allure-results --clean\n');
    process.exit(1);
  }

  const steps: Array<{ label: string; fn: CustomizeFn }> = [
    { label: 'index.html  ', fn: customizeIndexHtml },
    { label: 'styles.css  ', fn: customizeStylesCss },
    { label: 'app.js      ', fn: customizeAppJs },
    { label: 'summary.json', fn: customizeSummaryJson },
  ];

  const keys: Array<keyof CustomizationResults> = ['indexHtml', 'stylesCss', 'appJs', 'summaryJson'];
  const results = {} as CustomizationResults;

  for (let i = 0; i < steps.length; i++) {
    console.log(`● ${steps[i].label}`);
    results[keys[i]] = steps[i].fn();
    console.log();
  }

  console.log('└────────────────────────────────────────────────────────┘');
  console.log('\n  Results:');
  for (let i = 0; i < steps.length; i++) {
    console.log(`  ${results[keys[i]] ? '✓' : '✗'} ${steps[i].label.trim()}`);
  }

  console.log();
  if (results.indexHtml && results.stylesCss) {
    console.log('  ✔ Customization complete. Open allure-report/index.html to view.\n');
  } else {
    console.error('  ✖ Critical customizations failed. Check errors above.\n');
    process.exit(1);
  }
}

main();