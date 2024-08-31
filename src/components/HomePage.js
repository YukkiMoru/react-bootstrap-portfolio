import React from 'react'
import reactImage from "../Images/logos/react.png";
import jsImage from "../Images/logos/js.png";
import UE5Image from "../Images/logos/Unreal_Engine_Logo.png";
import profileImage from "../Images/PuffurFish/PF_NBG.png";

const HomePage = () => {
  return (
    <div className="container text-center">
    <h1>MORU</h1>

    <img src={profileImage} className="profileImage" />

    <p>
      Moruといいます。普段はマインクラフトやThe Finalsなどをやっています。
    最近はUnreal Engine 5やBlender、Atcoderも少しで遊んでいます。
    </p>
    <p>
      このサイトは改善の余地がたくさんあると思います。だんだんと発展させていく予定です。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>

        {/* //https://fontawesome.com/icons */}
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-sharp fa-landmark fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Tower_Defense</h4>
            <p class="text-muted">
              通称・TD系。 砲台を配置して、侵攻してくる敵の集団から本拠地を防衛する。
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">WIP</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">WIP</h4>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="skill">
      <div class="text-center">
        <h1 class="title">スキル</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React</h4>
            <p>Reactが少しつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} />
            <h4>HTML/JS/CSS</h4>
            <p>HTML/JS/CSSがつかえます</p>
          </div>
          <div class="col-md-4 services">
          <img src={UE5Image} className="UE5-image" />
            <h4>Unreal Engine 5</h4>
            <p>Unreal Engine 5がつかえます</p>
          </div>
        </div>
        <button type="button" class="btn btn-primary">
          スキル一覧
        </button>
      </div>
    </section>
  </div>
  )
}

export default HomePage
