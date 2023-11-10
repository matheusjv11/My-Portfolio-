import { hardSkills } from "@/services/about";
import * as S from "@/styles/skillSlider";

export default function SkillSlider() {
  return (
    <S.Wrapper>
      <S.Slider>
        <S.AnimatedDiv>
          {[...hardSkills, ...hardSkills].map((skill) => {
            return (
              <S.MainTechCard>
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
