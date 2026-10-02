import type { Metadata } from "next";
import styles from "./beta.module.css";

export const metadata: Metadata = {
  title: "CHECK-IN HOME β版｜自宅に、チェックイン。",
  description: "内装設計・施工と、完成後の継続サービスをひとつにした自宅ホテル化計画のβ版ページです。",
};

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
          <a href="#faq">よくある質問</a>
          <a href="/">現行版を見る</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroImage} role="img" aria-label="間接照明と木の質感を生かしたホテルライクな寝室" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.betaLabel}><span>BETA</span> FOUNDING MEMBERS</p>
          <p className={styles.overline}>新しい住まいの商品</p>
          <h1><span>自宅に、</span><span>チェックイン。</span></h1>
          <p className={styles.heroLead}>リニューアルと、暮らしの継続体験をひとつに。<br />空間をつくって終わらない、住まいの新しい選択肢です。</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="mailto:info@idea-d.jp?subject=自宅ホテル化計画β版の無料相談">無料相談を予約する <span>↗</span></a>
            <a className={styles.textLink} href="#feeling">計画について知る <span>↓</span></a>
          </div>
        </div>
        <p className={styles.heroFoot}>FOR HOMEOWNERS WHO WANT TO TURN THE EVERYDAY INTO SOMETHING EXTRAORDINARY.</p>
      </section>

      <section className={styles.aspiration}>
        <div>
          <p className={styles.aspirationOverline}>FROM STAY TO EVERYDAY</p>
          <h2><span>憧れのホテル暮らしを、</span><span>自宅で実現しませんか？</span></h2>
          <p className={styles.aspirationCopy}>旅先で出会った、心がほどける静けさを。<br />美しさも心地よさも、毎日帰る場所へ。</p>
          <p className={styles.aspirationQuestion}>では、なぜ私たちは、<br />ホテル暮らしに惹かれるのでしょうか。</p>
        </div>
      </section>

      <section className={styles.feeling} id="feeling">
        <div className={styles.feelingIntro}>
          <div>
            <p className={styles.feelingKicker}>ISSUE 01 / THE SOURCE OF WONDER</p>
            <h2><span>ホテルには心を動かされる</span><span>理由があります。</span></h2>
          </div>
          <div className={styles.feelingNarrative}>
            <p>
              <span>客室の扉を開けた瞬間に感じる香り。やわらかく広がる光。</span>
              <span>生活感が消え、リネンも家具も美しく整えられている。</span>
              <span>その新鮮さは、五感と気持ちが日常から切り替わるよう、</span>
              <span>空間と体験が丁寧に設計されているから生まれます。</span>
            </p>
          </div>
        </div>
        <div className={styles.senseGrid} aria-label="ホテルで日常から気持ちが切り替わる六つの理由">
          <article><img src="/images/scene-sight.png" alt="生活感を抑え、静かな視界が広がるリビング" /><div className={styles.senseCopy}><span>01 / SIGHT</span><h3>静かな視界</h3><p>生活感や余計なものが目に入らず、心まで静かになる。</p></div></article>
          <article><img src="/images/scene-scent.png" alt="木と石のコンソールに置かれたルームフレグランス" /><div className={styles.senseCopy}><span>02 / SCENT</span><h3>記憶に残る香り</h3><p>扉を開けた瞬間、いつもとは違う空気に切り替わる。</p></div></article>
          <article><img src="/images/scene-light.png" alt="間接照明のやわらかな光と影が広がる室内" /><div className={styles.senseCopy}><span>03 / LIGHT</span><h3>やわらかな光</h3><p>直接照らすのではなく、光と影が落ち着きをつくる。</p></div></article>
          <article><img src="/images/scene-touch.png" alt="清潔な白いリネンとタオルの心地よい質感" /><div className={styles.senseCopy}><span>04 / TOUCH</span><h3>肌で感じる心地よさ</h3><p>清潔なリネンやタオルの感触が、休息のスイッチになる。</p></div></article>
          <article><img src="/images/scene-order.png" alt="家具と小物が丁寧に整えられたリビング" /><div className={styles.senseCopy}><span>05 / ORDER</span><h3>整えられたしつらえ</h3><p>家具や小物の置き方まで、過ごしやすさが設計されている。</p></div></article>
          <article><img src="/images/scene-care.png" alt="ベッドと水回りまで手入れが行き届いた室内" /><div className={styles.senseCopy}><span>06 / CARE</span><h3>手入れされた安心感</h3><p>いつ訪れても整っていることが、特別な時間を支えている。</p></div></article>
        </div>
      </section>

      <section className={styles.customerVoice} id="customer-voice">
        <div>
          <p className={styles.customerVoiceLabel}>VOICE FROM HOMEOWNERS</p>
          <blockquote>
            <span>「でも、リニューアルしても、</span>
            <span>その感動って、最初だけですよね？」</span>
          </blockquote>
          <p className={styles.customerVoiceNote}>お客様からいただいた、率直なひと言。</p>
        </div>
      </section>


      <section className={styles.discover} id="discover">
        <div className={styles.sectionNumber}>ISSUE 02 / WHY THE FEELING FADES</div>
        <div className={styles.discoverGrid}>
          <h2>なぜ、その感動は<br />薄れていくのか。</h2>
          <div className={styles.bodyCopy}>
            <p className={styles.fixedFourLines}>
              <span>住まいが美しく整った瞬間、</span>
              <span>心がほどけるような、新しい感動が生まれます。</span>
              <span>けれど、時を重ねるほど、その新鮮さは少しずつ日常へ。</span>
              <span>完成時の感動を、暮らしの中で育て続ける仕組みが必要です。</span>
            </p>
            <p className={styles.pullQuote}>感動が続かないのは、<br />続ける仕組みがないからです。</p>
          </div>
        </div>
      </section>

      <section className={styles.answerBridge} aria-labelledby="answer-heading">
        <div className={styles.answerInner}>
          <p className={styles.answerLabel}>THE ANSWER</p>
          <div className={styles.answerLead}>
            <h2 id="answer-heading">ふたつの課題は、<br />解決できる。</h2>
            <p>感動が生まれる空間と、その感動を育て続ける体験。<br />ふたつを、最初からひとつの商品として設計します。</p>
          </div>
          <div className={styles.answerPillars}>
            <article>
              <span>01 / DESIGN &amp; BUILD</span>
              <h3>心を動かす理由を、<br />デザインする。</h3>
            </article>
            <article>
              <span>02 / CONTINUING CARE</span>
              <h3>完成後の感動を、<br />育て続ける。</h3>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.architecture} id="concept">
        <div className={styles.archImage} role="img" aria-label="落ち着いた木質空間と造作収納を備えたリビング" />
        <div className={styles.archContent}>
          <div className={styles.sectionNumber}>02 / THE ANSWER</div>
          <p className={styles.overlineDark}>ふたつの課題に、ひとつの答えを。</p>
          <h2>工事だけでは、終わりません。</h2>
          <p className={styles.answerCaption}>Check-in Homeは空間の完成をゴールとせず、そこから生まれる体験を継続するためのサポートまでを設計します。</p>
        </div>
      </section>

      <section className={styles.renovationDetail} id="renovation">
        <div className={styles.renovationInner}>
          <div className={styles.sectionNumber}>03 / DESIGN &amp; BUILD</div>
          <div className={styles.renovationGrid}>
            <div className={styles.renovationHeading}>
              <p className={styles.serviceOverline}>INTERIOR RENOVATION</p>
              <h2><span>心を動かす理由を、</span><span>デザインする。</span></h2>
            </div>
            <div className={styles.renovationBody}>
              <p>窓や自然光を変えられない改装でも、光・素材・手触り・動線のシークエンスを丁寧に整え、五感に残る情景をつくります。思い出のシグネチャーホテルを手がかりに、心を動かす世界観を設計し、施工まで一貫して形にします。</p>
              <ul className={styles.renovationFactors}>
                <li>視線と動きを導くシークエンス</li>
                <li>やわらかな間接光</li>
                <li>洗練されたディテール</li>
                <li>素材の質感と手触り</li>
                <li>記憶を呼び起こすしつらえ</li>
                <li>五感で感じる世界観の構築</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.serviceDetail} ${styles.careDetail}`} id="maintenance">
        <div className={styles.serviceCopy}>
          <div className={styles.sectionNumber}>04 / CONTINUING CARE</div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceHeading}>
              <p className={styles.serviceOverline}>AFTERCARE &amp; MAINTENANCE</p>
              <h2><span>完成後も、</span><span>感動は色褪せない。</span></h2>
            </div>
            <div className={styles.serviceBody}>
              <p>リネンやタオルの交換、アメニティや香りのお届け、家具レンタル、定期的な清掃まで。空間の美しさと新鮮さを保ちながら、暮らしに合わせて体験を更新します。また、定期的に、提携パートナーが部屋と水回りを整えます。ご希望に応じて、ホテルのような当日の夕食や一週間分の作り置きまで色褪せない感動を提供いたします。現在は少数のファウンディングメンバーと、担当者が直接やり取りしながらサービスを育てるβ運用期間です。</p>
              <div className={styles.carePlanSummary}>
                <article>
                  <small>BEDROOM &amp; LIVING</small>
                  <h3>ホテル・ステイ・エッセンシャル（β版）</h3>
                  <p>リネン・タオル、アメニティ、香りを定期的に整える。</p>
                </article>
                <article>
                  <small>WEEKLY HOME CARE</small>
                  <h3>ホテル・コンシェルジュ・ケア（β版）</h3>
                  <p>清掃、家事、当日の夕食や作り置きまで支える。</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.flow} id="flow">
        <div className={styles.sectionNumber}>05 / HOW IT WORKS</div>
        <h2>プロジェクトフロー</h2>
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
