import type { Metadata } from "next";
import styles from "./beta.module.css";

export const metadata: Metadata = {
  title: "CHECK-IN HOME β版｜その家は、まだホテルになれる。",
  description: "内装設計・施工と、完成後のリネンやアメニティ、ホームバー体験をひとつにした自宅ホテル化計画のβ版ページです。",
};

const principles = [
  ["01", "色は3色まで", "ベース70%、メイン20%、アクセント10%。色数を絞り、木・石・真鍮など素材の質感を重ねます。"],
  ["02", "生活感を隠す", "家電、配線、日用品は造作収納の中へ。視界のノイズを減らし、空間に静けさをつくります。"],
  ["03", "光を分散する", "一室一灯ではなく、間接照明やブラケットを配置。光と影の奥行きでホテルの空気を整えます。"],
];

const faqs = [
  ["賃貸でも相談できますか？", "造作を伴うプランは戸建て・分譲マンションが基本です。賃貸の場合は、原状回復が可能な範囲でご提案します。"],
  ["施工だけ、継続サービスだけでも利用できますか？", "個別のご相談も可能です。ただし空間と体験を一体で設計することで、このサービスの価値を最も実感いただけます。"],
  ["β版の継続サービスとは？", "正式な自動配送・オンライン管理の前段階として、担当者が直接手配しながら内容を調整する運用です。初期メンバーの声を反映し、正式版へ育てていきます。"],
  ["費用はどれくらいですか？", "施工費は空間の規模・仕様に応じた個別見積りです。継続サービスは月額12,000円〜38,000円を目安に、住まいに合わせて設計します。"],
];

export default function BetaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/beta" className={styles.brand} aria-label="CHECK-IN HOME β版トップ">
          <strong>CHECK-IN HOME</strong>
          <span>自宅ホテル化計画 / BETA</span>
        </a>
        <nav aria-label="β版ナビゲーション">
          <a href="#concept">しくみ</a>
          <a href="#plans">プラン</a>
          <a href="#faq">よくある質問</a>
          <a href="/">現行版を見る</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroImage} role="img" aria-label="間接照明と木の質感を生かしたホテルライクな寝室" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.betaLabel}><span>BETA</span> FOUNDING MEMBERS</p>
          <p className={styles.overline}>内装工事会社発、新しい住まいの商品</p>
          <h1><span>その家は、</span><span>まだ“ホテル”になれる。</span></h1>
          <p className={styles.heroLead}>施工と、暮らしの継続体験をひとつに。<br />空間をつくって終わらない、住まいの新しい選択肢です。</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="mailto:info@idea-d.jp?subject=自宅ホテル化計画β版の無料相談">無料相談を予約する <span>↗</span></a>
            <a className={styles.textLink} href="#discover">計画について知る <span>↓</span></a>
          </div>
        </div>
        <p className={styles.heroFoot}>FOR HOMEOWNERS WHO WANT TO TURN THE EVERYDAY INTO SOMETHING EXTRAORDINARY.</p>
      </section>

      <section className={styles.discover} id="discover">
        <div className={styles.sectionNumber}>01 / DISCOVER</div>
        <div className={styles.discoverGrid}>
          <h2>リノベーションの感動は、<br />なぜ薄れてしまうのか。</h2>
          <div className={styles.bodyCopy}>
            <p>リノベーションした瞬間は、たしかに感動した。でも、住み始めて半年もすると、いつもの部屋に戻っていませんか。</p>
            <p>これまでの内装工事は、完成した瞬間に業者との関係が終わる「フロー型」が中心でした。美しい空間を維持し、体験を更新する仕組みは、最初から用意されていなかったのです。</p>
            <p className={styles.pullQuote}>「感動が続かない」のは、<br />あなたのせいではありません。</p>
          </div>
        </div>
      </section>

      <section className={styles.architecture} id="concept">
        <div className={styles.archImage} role="img" aria-label="落ち着いた木質空間と造作収納を備えたリビング" />
        <div className={styles.archContent}>
          <div className={styles.sectionNumber}>02 / REFRAME</div>
          <p className={styles.overlineDark}>THE HOME AS A TWO-STORY EXPERIENCE</p>
          <h2>工事を「1階」で、<br />終わらせない。</h2>
          <p className={styles.archLead}>空間をつくるハードと、体験を保ち続けるソフト。ふたつを、最初からひとつの商品として設計します。</p>
          <div className={styles.floors}>
            <article>
              <span>2F</span>
              <div><small>CONTINUING EXPERIENCE</small><h3>暮らしを更新する</h3><p>リネン、アメニティ、香り、飲料、メンテナンスをβ版サービスとして個別に整えます。</p></div>
            </article>
            <article>
              <span>1F</span>
              <div><small>INITIAL RENOVATION</small><h3>空間の基盤をつくる</h3><p>設計、造作、照明、家具選定、施工までを、住まいの世界観に合わせて一貫して進めます。</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.sectionNumber}>03 / DESIGN PRINCIPLES</div>
        <div className={styles.headingRow}>
          <h2>ホテルの空気は、<br />感覚ではなく設計できる。</h2>
          <p>色を絞り、生活感を隠し、光を分散する。住まいとしての使いやすさを残しながら、静かな非日常をつくります。</p>
        </div>
        <div className={styles.principleList}>
          {principles.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className={styles.dayStory}>
        <div className={styles.dayIntro}>
          <p className={styles.overlineDark}>A DAY AT CHECK-IN HOME</p>
          <h2>チェックアウトのない、<br />ホテル時間を。</h2>
          <p>朝は糊のきいたシーツで目覚める。夜は自宅のカウンターで一杯。空間も、そこで過ごす時間も、暮らしに合わせて更新されていきます。</p>
        </div>
        <figure className={styles.dayPrimary}>
          <img src="/images/bedroom-japanese-modern.png" alt="木格子と白いリネンを配した落ち着いた寝室" />
          <figcaption>06:30 — WAKE UP</figcaption>
        </figure>
        <figure className={styles.daySecondary}>
          <img src="/images/living-room-signature.png" alt="木の造作と石のテーブルを組み合わせたリビング" />
          <figcaption>20:00 — UNWIND AT HOME</figcaption>
        </figure>
      </section>

      <section className={styles.plans} id="plans">
        <div className={styles.sectionNumber}>04 / BETA PLANS</div>
        <div className={styles.headingRow}>
          <h2>完成後の暮らしまで、<br />住まいに合わせて整える。</h2>
          <p>現在は少数のファウンディングメンバーと、担当者が直接やり取りしながらサービスを育てるβ運用期間です。</p>
        </div>
        <div className={styles.planGrid}>
          <article className={styles.planCard}>
            <div className={styles.planTop}><span>PLAN A</span><small>BEDROOM &amp; LIVING</small></div>
            <h3>ホテル・ステイ・<br />エッセンシャル</h3>
            <p>上質なリネンの交換・回収、タオルの定期交換、空間に合うアメニティやシグネチャーの香りをお届けします。</p>
            <ul><li>高級リネン交換・回収</li><li>バスアメニティ</li><li>ルームフレグランス</li></ul>
            <div className={styles.price}><small>月額目安</small><strong>¥12,000–25,000</strong></div>
          </article>
          <article className={`${styles.planCard} ${styles.planCardDark}`}>
            <div className={styles.planTop}><span>PLAN B</span><small>HOME BAR</small></div>
            <h3>ホームバー・マスター・<br />サプライ</h3>
            <p>ビールサーバーの保守、厳選した樽やリカーキット、バータイムを支える消耗品を定期的に整えます。</p>
            <ul><li>サーバー保守・ガス交換</li><li>クラフトビール・リカーキット</li><li>バー用品・消耗品</li></ul>
            <div className={styles.price}><small>月額目安</small><strong>¥18,000–38,000</strong></div>
          </article>
        </div>
        <p className={styles.planNote}>※施工費は別途、空間の規模・仕様に応じた個別見積りです。β版の内容・頻度は、ご要望を伺いながら調整します。</p>
      </section>

      <section className={styles.flow} id="flow">
        <div className={styles.sectionNumber}>05 / HOW IT WORKS</div>
        <h2>ここからが、本当の<br />お付き合いのはじまり。</h2>
        <ol>
          <li><span>01</span><div><strong>無料相談</strong><p>住まいの写真と、叶えたい過ごし方をお聞かせください。</p></div></li>
          <li><span>02</span><div><strong>設計・お見積り</strong><p>空間と完成後の体験を、ひとつの計画としてご提案します。</p></div></li>
          <li><span>03</span><div><strong>施工・お引渡し</strong><p>設計意図を共有したチームが、細部までつくり込みます。</p></div></li>
          <li><span>04</span><div><strong>βサービス開始</strong><p>暮らしに合わせて内容を調整し、体験を更新していきます。</p></div></li>
        </ol>
      </section>

      <section className={styles.faq} id="faq">
        <div>
          <div className={styles.sectionNumber}>06 / FAQ</div>
          <h2>はじめる前に、<br />知っておきたいこと。</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{question}<i>＋</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.message}>
        <div className={styles.messageImage} role="img" aria-label="素材と照明を確認しながら進める空間づくり" />
        <div className={styles.messageCopy}>
          <p className={styles.overline}>PROJECT MESSAGE</p>
          <h2>工事が終わった瞬間を、<br />ゴールにしたくない。</h2>
          <p>内装の仕事を続けるなかで、いつも歯がゆかったのは、工事が終わった瞬間にお客様との関係も終わってしまうことでした。</p>
          <p>本当に大切なのは、そこから住まい手がどんな日々を過ごすか。自宅ホテル化計画は、その問いへの私たちなりの答えです。</p>
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.betaLabel}><span>BETA</span> FOUNDING MEMBERS</p>
        <h2>まずは、住まいの写真から。</h2>
        <p>図面がなくても大丈夫です。現在は少数のお客様と丁寧に向き合いながら、β版サービスを育てています。</p>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href="mailto:info@idea-d.jp?subject=自宅ホテル化計画β版の無料相談">無料相談を予約する <span>↗</span></a>
          <a className={styles.secondaryButton} href="mailto:info@idea-d.jp?subject=自宅ホテル化計画β版の資料請求">資料を請求する</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.brand}><strong>CHECK-IN HOME</strong><span>自宅ホテル化計画 / BETA</span></div>
        <p>その家は、まだ“ホテル”になれる。</p>
        <small>© 2026 CHECK-IN HOME</small>
      </footer>
    </main>
  );
}
