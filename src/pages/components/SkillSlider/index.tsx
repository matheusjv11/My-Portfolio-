import { hardSkills } from "@/services/about";
import * as S from "@/styles/skillSlider";

export default function SkillSlider() {
  return (
    <S.Wrapper>
      <S.Slider>
        <S.AnimatedDiv>
          {[...hardSkills, ...hardSkills].map((skill, i) => {
            return (
              <S.MainTechCard key={i}>
                <S.Card title={skill.label}>
                  <img src={skill.image} alt={skill.label} />
                </S.Card>
              </S.MainTechCard>
            );
          })}
        </S.AnimatedDiv>
      </S.Slider>
    </S.Wrapper>
  );
}
