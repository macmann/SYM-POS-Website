import { PageHero } from "@/components/detail-page";
import { Button, SectionHeading } from "@/components/product";
import { Download, ArrowUpRight } from "lucide-react";
import { metadata as createMetadata } from "@/lib/seo";
import { site } from "@/content/site";

const downloadFolder = "https://drive.google.com/drive/folders/1j1qoG8mFsEq4eKxQAwf2uld9cxBufn_t?usp=sharing";

export const metadata = createMetadata(
  "Download & install SYM POS",
  "Get the Windows batch scripts and README for SYM POS. Follow the installation guide included in the shared download folder.",
  "/download",
);

export default function DownloadPage() {
  return (
    <>
      <PageHero eyebrow="DOWNLOAD & INSTALL" title="Your POS installation starts here."
        description="Get the Windows batch scripts and their README from the shared download folder. Keep all five scripts together, then run install_sym_pos.bat as Administrator to set up your POS computer."
        path="/download" actions={false} />
      <section className="section">
        <div className="page-guide">
          <p className="eyebrow">WINDOWS · BATCH SCRIPTS</p>
          <h2>Installation files and instructions, together.</h2>
          <p>Open the Google Drive folder to download the .bat scripts and read the accompanying README. Downloads are hosted on Google Drive. Keep install_sym_pos.bat, start_sym_pos_hidden.bat, update_sym_pos.bat, restart_sym_pos.bat and uninstall_sym_pos.bat together for installation.</p>
          <a className="button button-dark" href={downloadFolder} target="_blank" rel="noopener noreferrer">
            <Download size={18} aria-hidden="true" /> Open download folder <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p>Opens Google Drive in a new tab. Select a file and choose Download, or download the folder as a ZIP.</p>
        </div>
      </section>
      <section className="section">
        <SectionHeading eyebrow="WHAT THE INSTALLER DOES" title="Setup with your existing configuration in mind." />
        <div className="page-guide">
          <p>The installer creates or preserves the restaurant_pos database and creates or updates pos_user. It clones or updates the RestaurantPOS repository, creates .env on the first installation and preserves an existing .env when reinstalled.</p>
          <p>It installs dependencies, generates Prisma, runs database migrations, type checks and builds the application. Canonical maintenance scripts are copied into the app folder.</p>
        </div>
      </section>
      <section className="section" id="installation">
        <SectionHeading eyebrow="HOW TO GET STARTED" title="Download. Read. Run."
          description="The installer checks Git, Node.js 20+ and PostgreSQL. Read the included README before making changes to an existing installation." />
        <div className="article-grid">
          {[
            ["Download the files", "Open the folder above and download the scripts together with the README and any accompanying files. If Google Drive gives you a ZIP, extract it before running anything."],
            ["Read the README first", "Check Git, Node.js 20+ and PostgreSQL on your Windows computer. Keep all five .bat files together and read the accompanying README before installing."],
            ["Run the documented script", "Right-click install_sym_pos.bat and choose Run as administrator. Follow its prompts and keep the command window open to read completion or error messages. The installer starts the POS and checks /healthz."],
          ].map(([title, text], index) => (
            <article className="info-card" key={title}>
              <p className="eyebrow">0{index + 1} — INSTALLATION</p>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="page-guide">
          <h2>Check your installation before your first shift.</h2>
          <p>The installer creates Desktop shortcuts for Start, Update, Restart and Uninstall, and installs the hidden launcher into Windows Startup. It adds a Private-network firewall rule for the POS port. Use the startup and browser address given in the README. Confirm you can open the POS and sign in, then test your menu, ordering and printer setup before using real orders. Batch scripts run on Windows; they do not run directly on phones, macOS or Linux.</p>
          <p>If installation stops, note the script name and error message before contacting support. If a download or Windows security warning appears, confirm the file source before proceeding; do not disable your security software.</p>
          <div className="hero-actions">
            <Button href="/contact?intent=support">Get installation help</Button>
            <Button href={`${site.github}/blob/main/README.md`} secondary>Repository setup guide</Button>
          </div>
        </div>
      </section>
      <section className="section" id="maintenance">
        <SectionHeading eyebrow="AFTER INSTALLATION" title="Start, update, restart or uninstall." description="Use the Desktop shortcuts created by the installer or the canonical maintenance scripts in the app folder." />
        <div className="article-grid">
          {[
            ["Start", "start_sym_pos_hidden.bat", "Starts the POS using the hidden launcher. The installer also places the launcher in Windows Startup."],
            ["Update", "update_sym_pos.bat", "Stops the POS, fetches and resets the app to origin/main, and attempts a pg_dump backup. It installs dependencies, generates Prisma, runs migrations, type checks and builds, then restarts through the hidden launcher and checks /healthz. Local source changes are replaced: preserve them and verify your database backup before updating."],
            ["Restart", "restart_sym_pos.bat", "Reads PORT from .env, stops the listener on that port, restarts through the hidden launcher and checks /healthz."],
            ["Uninstall", "uninstall_sym_pos.bat", "Removes the app, Windows Startup launcher, Desktop shortcuts and firewall rule. PostgreSQL data is preserved by default. Dropping the database and role is optional and requires administrator confirmation. Git, Node.js and PostgreSQL remain installed."],
          ].map(([title, script, text]) => (
            <article className="info-card" key={script}>
              <h3>{title}</h3><p><code>{script}</code></p><p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
