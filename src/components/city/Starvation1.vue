<script setup lang="ts">
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '../../utilities/useIntersectionObserver'

defineProps({
  highlights: Array,
})

const emit = defineEmits<{
  toggle: [name: string],
}>()

const bakeries = ref<SVGPathElement | null>(null)
const { isVisible: isBakeriesVisible } = useIntersectionObserver(bakeries, {threshold: 0.5})
watch(isBakeriesVisible, (newVal, oldVal) => newVal !== oldVal && emit('toggle', 'bakeries'))

const mills = ref<SVGPathElement | null>(null)
const { isVisible: isMillsVisible } = useIntersectionObserver(mills, {threshold: 0.5})
watch(isMillsVisible, (newVal, oldVal) => newVal !== oldVal && emit('toggle', 'mills'))

const flourMassacre = ref<SVGCircleElement | null>(null)
const { isVisible: isFlourMassacre } = useIntersectionObserver(flourMassacre, {threshold: 0.1})
watch(isFlourMassacre, (newVal, oldVal) => newVal !== oldVal && emit('toggle', 'flourMassacre'))

const wckMassacre = ref<SVGCircleElement | null>(null)
const { isVisible: isWckMassacreVisible } = useIntersectionObserver(wckMassacre, {threshold: 0.1})
watch(isWckMassacreVisible, (newVal, oldVal) => newVal !== oldVal && emit('toggle', 'wckMassacre'))

const deadlyAidWork = ref<SVGPathElement | null>(null)
const { isVisible: isDeadlyAidWorkVisible } = useIntersectionObserver(deadlyAidWork, {threshold: 0.1})
watch(isDeadlyAidWorkVisible, (newVal, oldVal) => newVal !== oldVal && emit('toggle', 'deadlyAidWork'))
</script>

<template>
  <svg class="city-svg" width="13981" height="832" viewBox="0 0 13981 832" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M926 594.5V999H1141V383H974.5V594.5H926Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M576.5 588V899.5L1161.5 895V588H1197.5L1161.5 557.5H1104C1097.67 544.667 1075 519 1035 519C995 519 971.333 544.667 964.5 557.5H775.5C766.667 544.667 740.2 519 705 519C669.8 519 636 544.667 623.5 557.5H576.5L543 588H576.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M476.5 684H565V884H173.5V717.5H104L173.5 684H270.5V634H343V684H418V634H476.5V684Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M688.475 660V844.5V860H338.975C335.975 849 331.775 825.3 338.975 818.5C347.975 810 360.975 763.5 371.975 750C382.975 736.5 398.475 724 457.475 721.5C504.675 719.5 532.809 704.667 540.975 697.5V603H628.975V640L688.475 660Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M597 898V653.766V521H804.816V653.766H926V898H597Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M1370 449.5V854H1585V238H1418.5V449.5H1370Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M2812 667V1071.5H2597V455.5H2763.5V667H2812Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7069 756.5V1161H6707V545H6987.34V756.5H7069Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M12705 756.5V1161H12343V545H12623.3V756.5H12705Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M1117 654.5C1117.83 706.667 1119 815.4 1117 833H1519.5V545H1233.5V654.5H1117Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M1750.5 615.5V927L2335.5 922.5V615.5H2371.5L2335.5 585H2278C2271.67 572.167 2249 546.5 2209 546.5C2169 546.5 2145.33 572.167 2138.5 585H1949.5C1940.67 572.167 1914.2 546.5 1879 546.5C1843.8 546.5 1810 572.167 1797.5 585H1750.5L1717 615.5H1750.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3151 654.5V856.5H3377.5V654.5L3287.5 597.5H3237L3151 654.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path
    ref="mills"
    class="city-highlight"
    :class="highlights?.includes('mills') && 'city-highlight-visible'"
    d="M3151 654.5V856.5H3377.5V654.5L3287.5 597.5H3237L3151 654.5Z"
    fill="var(--color-highlight)"
    stroke="var(--color-highlight)"
    stroke-width="2"
  />
  <path d="M1557 697.5H1468.5V897.5H1860V731H1929.5L1860 697.5H1763V647.5H1690.5V697.5H1615.5V647.5H1557V697.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3582.5 656.5H3671V856.5H3279.5V690H3210L3279.5 656.5H3376.5V606.5H3449V656.5H3524V606.5H3582.5V656.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M2081.5 894V722V628.5H2289V722H2410V894H2081.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M6541.5 858.5V686.5V593H6334V686.5H6213V858.5H6541.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M4149 692H4039V846H4149L4236.5 731.5L4149 692Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3622 894V722V628.5H3829.5V722H3950.5V894H3622Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3162.5 853V681V587.5H2955V681H2834V853H3162.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M2616 654.5V856.5H2842.5V654.5L2752.5 597.5H2702L2616 654.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M6594 707V909H6820.5V707L6730.5 650H6680L6594 707Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M2373 701.5V886V901.5H2722.5C2725.5 890.5 2729.7 866.8 2722.5 860C2713.5 851.5 2700.5 805 2689.5 791.5C2678.5 778 2663 765.5 2604 763C2556.8 761 2528.67 746.167 2520.5 739V644.5H2432.5V681.5L2373 701.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3913.5 701.5V886V901.5H4263C4266 890.5 4270.2 866.8 4263 860C4254 851.5 4241 805 4230 791.5C4219 778 4203.5 765.5 4144.5 763C4097.3 761 4069.17 746.167 4061 739V644.5H3973V681.5L3913.5 701.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M3079.48 701.5V886V901.5L2786.5 955C2783.5 944 2779.3 920.3 2786.5 913.5C2795.5 905 2808.5 858.5 2819.5 845C2830.5 831.5 2825.5 787.5 2884.5 785C2931.7 783 2923.81 746.167 2931.98 739V644.5H3019.98V681.5L3079.48 701.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path
    ref="bakeries"
    class="city-highlight"
    :class="highlights?.includes('bakeries') && 'city-highlight-visible'"
    d="M3079.48 701.5V886V901.5L2786.5 955C2783.5 944 2779.3 920.3 2786.5 913.5C2795.5 905 2808.5 858.5 2819.5 845C2830.5 831.5 2825.5 787.5 2884.5 785C2931.7 783 2923.81 746.167 2931.98 739V644.5H3019.98V681.5L3079.48 701.5Z"
    fill="var(--color-highlight)"
    stroke="var(--color-highlight)"
    stroke-width="2"
  />
  <path d="M4411.5 785.5L4319 763.5L4286 801L4169.5 814L4115 856H4857.5L4721.5 801L4519 763.5L4411.5 785.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M10937.5 785.5L10845 763.5L10812 801L10695.5 814L10641 856H11383.5L11247.5 801L11045 763.5L10937.5 785.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path
    ref="deadlyAidWork"
    class="city-highlight"
    :class="highlights?.includes('deadlyAidWork') && 'city-highlight-visible'"
    d="M10937.5 785.5L10845 763.5L10812 801L10695.5 814L10641 856H11383.5L11247.5 801L11045 763.5L10937.5 785.5Z"
    fill="var(--color-highlight)"
    stroke="var(--color-highlight)"
    stroke-width="2"
  />
  <path d="M6245 786L6337.5 764L6370.5 801.5L6487 814.5L6541.5 856.5H5799L5935 801.5L6137.5 764L6245 786Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M6080 795L5981 845.5H6293L6185.5 795H6080Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M6934 477.5V882H7149V266H6982.5V477.5H6934Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M12570 477.5V882H12785V266H12618.5V477.5H12570Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7551.5 754.5C7550.67 806.667 7549.5 915.4 7551.5 933H7149V645H7435V754.5H7551.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7695.5 590V901.5L8280.5 897V590H8316.5L8280.5 559.5H8223C8216.67 546.667 8194 521 8154 521C8114 521 8090.33 546.667 8083.5 559.5H7894.5C7885.67 546.667 7859.2 521 7824 521C7788.8 521 7755 546.667 7742.5 559.5H7695.5L7662 590H7695.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7088.5 677.5H7177V877.5H6785.5V711H6716L6785.5 677.5H6882.5V627.5H6955V677.5H7030V627.5H7088.5V677.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M12724.5 677.5H12813V877.5H12421.5V711H12352L12421.5 677.5H12518.5V627.5H12591V677.5H12666V627.5H12724.5V677.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7418 929V757.324V664H7778.68V757.324H7989V929H7418Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M7301 654V838.5V854H7650.5C7653.5 843 7657.7 819.3 7650.5 812.5C7641.5 804 7628.5 757.5 7617.5 744C7606.5 730.5 7591 718 7532 715.5C7484.8 713.5 7456.67 698.667 7448.5 691.5V597H7360.5V634L7301 654Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M6417 701.5V886V901.5H6766.5C6769.5 890.5 6773.7 866.8 6766.5 860C6757.5 851.5 6744.5 805 6733.5 791.5C6722.5 778 6707 765.5 6648 763C6600.8 761 6572.67 746.167 6564.5 739V644.5H6476.5V681.5L6417 701.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M8141 893.5V721.5V628H8348.5V721.5H8469.5V893.5H8141Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <circle cx="5307" cy="832" r="31.5" fill="black" stroke="#FF7CAC"/>
  <circle
    ref="flourMassacre"
    class="city-highlight"
    :class="highlights?.includes('flourMassacre') && 'city-highlight-visible'"
    cx="5307"
    cy="832"
    r="31.5"
    fill="var(--color-highlight)"
    stroke="var(--color-highlight)"
  />
  <circle cx="8894" cy="832" r="31.5" fill="black" stroke="#FF7CAC"/>
  <circle
    ref="wckMassacre"
    class="city-highlight"
    :class="highlights?.includes('wckMassacre') && 'city-highlight-visible'"
    cx="8894"
    cy="832"
    r="31.5"
    fill="var(--color-highlight)"
    stroke="var(--color-highlight)"
  />
  <path d="M9660 487.5V892H9875V276H9708.5V487.5H9660Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M9407 692.5C9407.83 744.667 9409 853.4 9407 871H9809.5V583H9523.5V692.5H9407Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M10040.5 653.5V965L10625.5 960.5V653.5H10661.5L10625.5 623H10568C10561.7 610.167 10539 584.5 10499 584.5C10459 584.5 10435.3 610.167 10428.5 623H10239.5C10230.7 610.167 10204.2 584.5 10169 584.5C10133.8 584.5 10100 610.167 10087.5 623H10040.5L10007 653.5H10040.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M12708.5 611V922.5L13293.5 918V611H13329.5L13293.5 580.5H13236C13229.7 567.667 13207 542 13167 542C13127 542 13103.3 567.667 13096.5 580.5H12907.5C12898.7 567.667 12872.2 542 12837 542C12801.8 542 12768 567.667 12755.5 580.5H12708.5L12675 611H12708.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M9847 735.5H9758.5V935.5H10150V769H10219.5L10150 735.5H10053V685.5H9980.5V735.5H9905.5V685.5H9847V735.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M10371.5 932V760V666.5H10579V760H10700V932H10371.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M13039.5 889.5V717.5V624H13247V717.5H13368V889.5H13039.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M10663 739.5V924V939.5H11012.5C11015.5 928.5 11019.7 904.8 11012.5 898C11003.5 889.5 10990.5 843 10979.5 829.5C10968.5 816 10953 803.5 10894 801C10846.8 799 10818.7 784.167 10810.5 777V682.5H10722.5V719.5L10663 739.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M13331 697V881.5V897H13680.5C13683.5 886 13687.7 862.3 13680.5 855.5C13671.5 847 13658.5 800.5 13647.5 787C13636.5 773.5 13621 761 13562 758.5C13514.8 756.5 13486.7 741.667 13478.5 734.5V640H13390.5V677L13331 697Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M11367.5 649V851H11594V649L11504 592H11453.5L11367.5 649Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M11799 651H11887.5V851H11496V684.5H11426.5L11496 651H11593V601H11665.5V651H11740.5V601H11799V651Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M11838.5 888.5V716.5V623H12046V716.5H12167V888.5H11838.5Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M11379 847.5V675.5V582H11171.5V675.5H11050.5V847.5H11379Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M12130 696V880.5V896H12479.5C12482.5 885 12486.7 861.3 12479.5 854.5C12470.5 846 12457.5 799.5 12446.5 786C12435.5 772.5 12420 760 12361 757.5C12313.8 755.5 12285.6 740.667 12277.5 733.5V639H12189.5V676L12130 696Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
  <path d="M11296 696V880.5V896L11003 949.5C11000 938.5 10995.8 914.8 11003 908C11012 899.5 11025 853 11036 839.5C11047 826 11042 782 11101 779.5C11148.2 777.5 11140.3 740.667 11148.5 733.5V639H11236.5V676L11296 696Z" fill="black" stroke="#FF7CAC" stroke-width="2"/>
</svg>
</template>

<style>
.city-highlight {
  opacity: 0;
  transition: opacity 0.5s;
}

.city-highlight-visible {
  opacity: 1;
}
</style>