import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

export const metadata = {
  title: "ISL Vision — How it works · Dhairya Rastogi",
  description:
    "Fine-tuning a video transformer for Indian Sign Language recognition, and why the architecture choice mattered more than the training loop.",
};

export default function IslVision() {
  return (
    <>
      <SiteNav active="work" />
      <main id="top">
        <section className="page-head">
          <div className="container">
            <a className="back-link mono" href="/work">← All work</a>
            <div className="eyebrow mono">Project · Computer vision</div>
            <h1 className="page-title">
              ISL Vision — real-time Indian Sign Language recognition
            </h1>
            <p className="page-sub">
              My final-year project. A video transformer fine-tuned on 262 Indian Sign
              Language classes, wrapped in a desktop app that translates a webcam clip on
              CPU.
            </p>
            <div className="cs-meta">
              <div>
                <span className="k mono">Role</span>
                <p>Solo — model, training, desktop app</p>
              </div>
              <div>
                <span className="k mono">Stack</span>
                <p>PyTorch · HuggingFace Transformers · OpenCV · CustomTkinter</p>
              </div>
              <div>
                <span className="k mono">Trained on</span>
                <p>Kaggle free GPU (T4 ×2)</p>
              </div>
            </div>
            <div className="cs-links">
              <a
                className="cs-link cs-link-primary"
                href="https://github.com/dhairya1411/ISL_Visions"
                target="_blank"
                rel="noopener"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container prose">
            <h2>The problem</h2>
            <p>
              Indian Sign Language has 262 distinct signs in the dataset I worked with,
              and very little open-source tooling compared to American Sign Language.
              Existing approaches leaned on CNN-LSTM architectures, which struggle with
              signs whose meaning lives in <em>motion over time</em> rather than in any
              single frame.
            </p>

            <h2>The decision that mattered</h2>
            <p>
              The interesting choice here wasn&apos;t hyperparameters — it was
              architecture. A CNN-LSTM extracts features frame by frame and then tries to
              stitch temporal meaning on afterwards. A video transformer attends across
              frames natively, so the temporal relationship is part of the representation
              rather than bolted onto it.
            </p>
            <p>
              I fine-tuned <strong>VideoMAE</strong> (ViT-B/16, pretrained on Kinetics-400)
              using transfer learning rather than training from scratch — with a 262-class
              dataset and free-tier GPU time, pretrained motion features were the only
              realistic path to usable accuracy.
            </p>
            <div className="cs-impact">
              <div>
                <div className="num">91.45%</div>
                <div className="lbl">Top-1 accuracy across 262 classes</div>
              </div>
              <div>
                <div className="num">~66%</div>
                <div className="lbl">CNN-LSTM baseline for comparison</div>
              </div>
              <div>
                <div className="num">~25 pts</div>
                <div className="lbl">improvement over that baseline</div>
              </div>
            </div>

            <h2>Making it usable, not just accurate</h2>
            <p>
              A checkpoint in a notebook isn&apos;t a product. I built a desktop app that
              records a 1.5-second webcam clip, extracts frames, runs inference and shows
              the predicted sign with a confidence score.
            </p>
            <p>
              Two constraints shaped it. Inference runs <strong>on CPU</strong>, because
              requiring a GPU would exclude most of the people who&apos;d actually use
              this. And inference runs on a <strong>background thread</strong>, because a
              UI that freezes for two seconds per sign feels broken even when the model is
              right.
            </p>
            <p>
              Showing the confidence score was a deliberate call too: a silent wrong answer
              is worse than a hedged one when someone is relying on the output to
              communicate.
            </p>

            <h2>Honest limitations</h2>
            <ul>
              <li>
                Accuracy is measured on the dataset&apos;s own test split — not on live
                webcam input from people who weren&apos;t in the dataset, which is a
                meaningfully harder problem.
              </li>
              <li>
                Model weights aren&apos;t in the repo due to file size, so the demo
                isn&apos;t currently one-click reproducible.
              </li>
              <li>
                It recognises isolated signs, not continuous signing — no segmentation of a
                sentence into individual signs.
              </li>
            </ul>

            <h2>What I took from it</h2>
            <p>
              This one is engineering rather than product work, and I&apos;d frame it that
              way in an interview. What carries over is the habit of choosing the
              architecture that matches the shape of the problem, and of treating
              &ldquo;runs on the hardware people have&rdquo; as a requirement rather than
              an optimisation.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
