import {
  Button,
  LanguageSelect,
  Tab,
  Tabs,
  TextField,
  TextLink,
} from "@/shared/ui";
import {
  BurgerGlyph,
  ChevronRightGlyph,
  CloseGlyph,
  ProfileGlyph,
  TronGlyph,
  WalletGlyph,
} from "@/shared/ui/icons";
import styles from "./page.module.scss";

const fieldSlots = {
  start: <WalletGlyph />,
  end: (
    <span className={styles.iconPair}>
      <WalletGlyph />
      <TronGlyph />
    </span>
  ),
};

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>UI Kit</h1>
      <p className={styles.subtitle}>
        Токены в <code>globals.css</code>, компоненты в{" "}
        <code>src/shared/ui</code>.
      </p>

      <h2 className={styles.sectionTitle}>Кнопки</h2>
      <div className={styles.grid}>
        <span className={styles.rowLabel} aria-hidden>
          Default
        </span>
        <div className={styles.row}>
          <Button variant="cta" size="l">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="secondary" size="l">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="burger" size="l">
            <BurgerGlyph />
            Меню
          </Button>
          <Button variant="cta" size="m">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="secondary" size="m">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="icon" size="l" aria-label="Далее">
            <ChevronRightGlyph />
          </Button>
          <Button variant="icon" size="m" aria-label="Далее">
            <ChevronRightGlyph />
          </Button>
        </div>

        <span className={styles.rowLabel} aria-hidden>
          Press
        </span>
        <p className={styles.row}>
          Наведите или зажмите — <code>:hover</code> / <code>:active</code>.
        </p>

        <span className={styles.rowLabel} aria-hidden>
          Disabled
        </span>
        <div className={styles.row}>
          <Button variant="cta" size="l" disabled>
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="secondary" size="l" disabled>
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="burger" size="l" disabled>
            <CloseGlyph />
            Закрыть
          </Button>
          <Button variant="icon" size="l" disabled aria-label="Далее">
            <ChevronRightGlyph />
          </Button>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <div className={styles.row}>
          <Button variant="cta" size="l">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="secondary" size="l">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="burger" size="l">
            <BurgerGlyph />
            Меню
          </Button>
          <Button variant="cta" size="m">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="secondary" size="m">
            <ProfileGlyph />
            Btn-name
          </Button>
          <Button variant="icon" size="l" aria-label="Далее">
            <ChevronRightGlyph />
          </Button>
          <Button variant="icon" size="m" aria-label="Далее">
            <ChevronRightGlyph />
          </Button>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Ссылки</h2>
      <p className={styles.subtitle}>
        Состояния через <code>:hover</code> и <code>:active</code>.
      </p>
      <div className={styles.linkColumns}>
        <div className={styles.linkColumn}>
          <div className={styles.linkColumnTitle}>Default</div>
          <div className={styles.linkRow}>
            <TextLink href="/" variant="default">
              Link
            </TextLink>
          </div>
        </div>
        <div className={styles.linkColumn}>
          <div className={styles.linkColumnTitle}>Header</div>
          <div className={styles.linkRow}>
            <TextLink href="/" variant="header">
              Link
            </TextLink>
          </div>
        </div>
        <div className={styles.linkColumn}>
          <div className={styles.linkColumnTitle}>Footer</div>
          <div className={styles.linkRow}>
            <TextLink href="/" variant="footer">
              Link
            </TextLink>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Табы</h2>
      <div className={styles.tabsRow}>
        <div>
          <p className={styles.tabsGroupTitle}>Vertical</p>
          <Tabs orientation="vertical">
            <Tab active>Tab name</Tab>
            <Tab>Tab name</Tab>
          </Tabs>
        </div>
        <div>
          <p className={styles.tabsGroupTitle}>Horizontal</p>
          <Tabs orientation="horizontal">
            <Tab active>Tab name</Tab>
            <Tab>Tab name</Tab>
          </Tabs>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Поля ввода</h2>
      <p className={styles.subtitle}>
        Интерактивное поле внизу; сверху — зафиксированные состояния макета.
      </p>
      <div className={styles.fieldMatrix}>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Default</span>
          <TextField
            label="Label"
            visualVariant="default"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Hover</span>
          <TextField
            label="Label"
            visualVariant="hover"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Typing / active</span>
          <TextField
            label="Label"
            visualVariant="typing"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Entered</span>
          <TextField
            label="Label"
            visualVariant="entered"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Error</span>
          <TextField
            label="Label"
            visualVariant="error"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
        <div className={styles.fieldRow}>
          <span className={styles.rowLabel}>Live</span>
          <TextField
            label="Label"
            visualVariant="interactive"
            placeholder="Placeholder"
            startSlot={fieldSlots.start}
            endSlot={fieldSlots.end}
          />
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Язык</h2>
      <p className={styles.subtitle}>
        Статичные варианты — для сравнения с макетом; последняя строка — живой
        селект.
      </p>
      <div className={styles.langGrid}>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>default</p>
          <LanguageSelect variant="default" demo="default" />
        </div>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>hover</p>
          <LanguageSelect variant="default" demo="hover" />
        </div>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>open</p>
          <LanguageSelect variant="default" demo="open" />
        </div>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>invert default</p>
          <LanguageSelect variant="invert" demo="default" />
        </div>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>invert open</p>
          <LanguageSelect variant="invert" demo="open" />
        </div>
        <div className={styles.langCell}>
          <p className={styles.langCaption}>interactive</p>
          <LanguageSelect
            variant="default"
            options={[
              { value: "ru", label: "RUS" },
              { value: "en", label: "ENG" },
            ]}
          />
        </div>
      </div>

      <p className={styles.note}>
        CTA disabled: фон <code>--btn-cta-disabled-bg</code>, текст{" "}
        <code>--btn-cta-disabled-fg</code> (без общего opacity). Табы: hover для
        active / inactive. Поля: <code>TextField</code>, язык:{" "}
        <code>LanguageSelect</code>.
      </p>
    </main>
  );
}
