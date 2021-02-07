import React from 'react';
import { Link } from "react-router-dom";

function NoMatch() {
    return (
            <div className="code-404">
                <div className="code-404__content">
                    <div className="code-404__content-img">
                        <svg width="1075" height="585" viewBox="0 0 1075 585" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M540.643 584.231C831.974 584.231 1068.14 568.596 1068.14 549.309C1068.14 530.023 831.974 514.388 540.643 514.388C249.313 514.388 13.1434 530.023 13.1434 549.309C13.1434 568.596 249.313 584.231 540.643 584.231Z" fill="#FFFFFE"/>
                        <path d="M520.426 167.01C434.482 167.01 372.775 222.149 372.775 350.808C372.775 496.621 434.482 535.218 520.426 535.218C606.37 535.218 671.753 492.945 671.753 350.808C671.753 198.868 606.37 167.01 520.426 167.01ZM520.991 486.818C461.464 486.818 430.365 451.895 430.365 350.902C430.365 261.79 462.737 214.797 522.264 214.797C581.791 214.797 614.163 245.665 614.163 350.902C614.163 449.349 580.517 486.818 520.991 486.818Z" fill="#EADDCF"/>
                        <path d="M321.311 433.517H285.777V328.877C285.777 323.32 283.569 317.989 279.639 314.059C275.709 310.129 270.379 307.922 264.821 307.922H256.495C253.743 307.922 251.018 308.464 248.475 309.517C245.933 310.57 243.623 312.113 241.677 314.059C239.731 316.005 238.187 318.315 237.134 320.858C236.081 323.4 235.539 326.125 235.539 328.877V433.517H135.309C133.247 433.517 131.22 432.984 129.425 431.97C127.629 430.955 126.127 429.494 125.062 427.728C123.998 425.962 123.408 423.951 123.35 421.89C123.292 419.829 123.768 417.788 124.731 415.965L230.814 215.184C232.136 212.681 232.938 209.936 233.17 207.114C233.402 204.293 233.061 201.453 232.165 198.768C231.27 196.082 229.84 193.605 227.961 191.487C226.082 189.37 223.793 187.654 221.233 186.445L214.971 183.488C210.108 181.192 204.549 180.853 199.444 182.541C194.338 184.23 190.077 187.816 187.542 192.558L58.1602 434.591C55.957 438.712 54.8043 443.314 54.8043 447.987V447.987C54.8043 451.719 55.5393 455.414 56.9673 458.861C58.3954 462.309 60.4885 465.441 63.1271 468.08C65.7658 470.719 68.8983 472.812 72.3459 474.24C75.7935 475.668 79.4885 476.403 83.2202 476.403H235.539V542.57C235.539 545.869 236.189 549.135 237.451 552.183C238.713 555.23 240.564 557.999 242.896 560.332C245.229 562.664 247.998 564.515 251.045 565.777C254.093 567.039 257.359 567.689 260.658 567.689H260.658C263.957 567.689 267.223 567.039 270.271 565.777C273.318 564.515 276.087 562.664 278.42 560.332C280.752 557.999 282.603 555.23 283.865 552.183C285.127 549.135 285.777 545.869 285.777 542.57V476.403H321.311C326.998 476.403 332.452 474.144 336.474 470.122C340.495 466.101 342.754 460.647 342.754 454.96V454.96C342.754 449.273 340.495 443.819 336.474 439.797C332.453 435.776 326.998 433.517 321.311 433.517V433.517Z" fill="#8C7851"/>
                        <path d="M979.308 433.517H943.773V328.877C943.773 323.32 941.566 317.989 937.636 314.059C933.706 310.129 928.375 307.922 922.818 307.922H914.491C911.739 307.922 909.014 308.464 906.472 309.517C903.929 310.57 901.619 312.113 899.673 314.059C897.727 316.005 896.184 318.315 895.131 320.858C894.077 323.4 893.535 326.125 893.535 328.877V433.517H793.305C791.243 433.517 789.216 432.984 787.421 431.97C785.626 430.955 784.123 429.494 783.059 427.728C781.995 425.962 781.405 423.951 781.347 421.89C781.289 419.829 781.764 417.788 782.728 415.965L888.81 215.184C890.133 212.681 890.934 209.936 891.167 207.114C891.399 204.293 891.057 201.453 890.162 198.768C889.266 196.082 887.836 193.605 885.957 191.487C884.078 189.37 881.79 187.654 879.23 186.445L872.967 183.488C868.105 181.192 862.546 180.853 857.44 182.541C852.334 184.23 848.073 187.816 845.538 192.558L716.157 434.591C713.953 438.712 712.801 443.314 712.801 447.987V447.987C712.801 455.523 715.795 462.751 721.124 468.08C726.453 473.409 733.68 476.403 741.217 476.403H893.535V542.57C893.535 549.232 896.182 555.621 900.893 560.332C905.603 565.043 911.992 567.689 918.654 567.689V567.689C925.316 567.689 931.705 565.043 936.416 560.332C941.127 555.621 943.773 549.232 943.773 542.57V476.403H979.308C984.995 476.403 990.449 474.144 994.47 470.122C998.492 466.101 1000.75 460.647 1000.75 454.96V454.96C1000.75 449.273 998.492 443.819 994.47 439.797C990.449 435.776 984.995 433.517 979.308 433.517Z" fill="#8C7851"/>
                        <path d="M331.114 421.264H295.58V316.624C295.58 313.872 295.038 311.147 293.984 308.605C292.931 306.062 291.388 303.752 289.442 301.806C287.496 299.86 285.186 298.317 282.643 297.263C280.101 296.21 277.376 295.668 274.624 295.668H266.297C260.74 295.668 255.409 297.876 251.479 301.806C247.549 305.736 245.341 311.066 245.341 316.624V421.264H145.111C143.049 421.264 141.023 420.731 139.227 419.716C137.432 418.702 135.929 417.241 134.865 415.475C133.801 413.709 133.211 411.698 133.153 409.637C133.095 407.576 133.571 405.535 134.534 403.712L240.616 202.931C241.939 200.428 242.74 197.683 242.973 194.861C243.205 192.04 242.863 189.2 241.968 186.514C241.072 183.828 239.642 181.352 237.763 179.234C235.884 177.116 233.596 175.401 231.036 174.192L224.773 171.235C219.911 168.939 214.352 168.6 209.246 170.288C204.141 171.976 199.879 175.563 197.344 180.305L67.9627 422.338C65.7595 426.459 64.6069 431.06 64.6069 435.734V435.734C64.6069 443.27 67.6007 450.498 72.9297 455.827C78.2587 461.156 85.4864 464.15 93.0227 464.15H245.341V530.317C245.341 533.616 245.991 536.882 247.254 539.93C248.516 542.977 250.366 545.746 252.699 548.079C255.031 550.411 257.8 552.262 260.848 553.524C263.895 554.786 267.162 555.436 270.46 555.436H270.461C277.122 555.436 283.512 552.789 288.222 548.079C292.933 543.368 295.58 536.979 295.58 530.317V464.15H331.114C333.93 464.15 336.718 463.595 339.32 462.517C341.921 461.44 344.285 459.86 346.276 457.869C348.268 455.878 349.847 453.514 350.925 450.913C352.002 448.311 352.557 445.523 352.557 442.707V442.707C352.557 439.891 352.002 437.102 350.925 434.501C349.847 431.899 348.268 429.535 346.276 427.544C344.285 425.553 341.921 423.973 339.32 422.896C336.718 421.818 333.93 421.264 331.114 421.264V421.264Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M997.688 421.264H962.153V316.624C962.153 311.066 959.946 305.736 956.016 301.806C952.086 297.876 946.755 295.668 941.198 295.668H932.871C930.119 295.668 927.394 296.21 924.852 297.263C922.309 298.317 919.999 299.86 918.053 301.806C916.107 303.752 914.564 306.062 913.51 308.605C912.457 311.147 911.915 313.872 911.915 316.624V421.264H811.685C809.623 421.264 807.596 420.731 805.801 419.716C804.006 418.702 802.503 417.241 801.439 415.475C800.374 413.709 799.785 411.698 799.727 409.637C799.669 407.576 800.144 405.535 801.108 403.712L907.19 202.931C908.513 200.428 909.314 197.683 909.547 194.861C909.779 192.04 909.437 189.2 908.542 186.514C907.646 183.828 906.216 181.352 904.337 179.234C902.458 177.116 900.17 175.401 897.61 174.192L891.347 171.235C886.485 168.939 880.925 168.6 875.82 170.288C870.714 171.976 866.453 175.563 863.918 180.305L734.536 422.338C732.333 426.459 731.181 431.06 731.181 435.734C731.181 443.27 734.174 450.498 739.503 455.827C744.832 461.156 752.06 464.15 759.596 464.15H911.915V530.317C911.915 536.979 914.562 543.368 919.272 548.079C923.983 552.789 930.372 555.436 937.034 555.436V555.436C943.696 555.436 950.085 552.789 954.796 548.079C959.507 543.368 962.153 536.979 962.153 530.317V464.15H997.688C1000.5 464.15 1003.29 463.595 1005.89 462.517C1008.5 461.44 1010.86 459.86 1012.85 457.869C1014.84 455.878 1016.42 453.514 1017.5 450.913C1018.58 448.311 1019.13 445.523 1019.13 442.707V442.707C1019.13 437.02 1016.87 431.565 1012.85 427.544C1008.83 423.523 1003.37 421.264 997.688 421.264V421.264Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M540.031 155.982C454.087 155.982 392.38 211.121 392.38 339.78C392.38 485.593 454.087 524.19 540.031 524.19C625.975 524.19 691.358 481.917 691.358 339.78C691.358 187.84 625.975 155.982 540.031 155.982ZM540.596 475.79C481.069 475.79 449.97 440.867 449.97 339.874C449.97 250.762 482.342 203.769 541.869 203.769C601.396 203.769 633.768 234.637 633.768 339.874C633.768 438.321 600.123 475.79 540.596 475.79V475.79Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M1006.86 419.55C1009.89 420.651 1013.14 421.034 1016.34 420.667C1019.54 420.301 1022.62 419.196 1025.32 417.439C1028.02 415.683 1030.28 413.322 1031.91 410.544C1033.55 407.766 1034.51 404.647 1034.74 401.431C1034.96 398.216 1034.43 394.992 1033.2 392.015C1031.96 389.038 1030.05 386.388 1027.62 384.275C1025.19 382.161 1022.3 380.642 1019.17 379.837C1016.05 379.032 1012.79 378.962 1009.64 379.634L1010.16 390.347L1005.09 381.166C1000.11 383.503 996.271 387.72 994.405 392.889C993.742 394.699 993.338 396.595 993.207 398.519C992.887 403.032 994.048 407.527 996.512 411.322C998.976 415.117 1002.61 418.006 1006.86 419.55V419.55Z" fill="#F25042"/>
                        <path d="M1031.94 543.793C1030.15 534.683 1037.9 526.606 1045.56 521.357C1053.22 516.107 1062.17 510.949 1064.78 502.04C1068.53 489.236 1057.35 477.51 1048.64 467.398C1042.19 459.894 1036.64 451.65 1032.12 442.841C1030.31 439.308 1028.64 435.615 1028.17 431.674C1027.48 425.999 1029.31 420.351 1031.14 414.938C1037.26 396.903 1043.8 379.02 1050.77 361.288" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M1007.72 416.792C1010.75 417.893 1013.99 418.276 1017.2 417.909C1020.4 417.543 1023.47 416.438 1026.17 414.682C1028.88 412.925 1031.13 410.565 1032.77 407.787C1034.4 405.009 1035.37 401.889 1035.59 398.673C1035.82 395.458 1035.29 392.234 1034.06 389.257C1032.82 386.28 1030.91 383.63 1028.48 381.517C1026.04 379.403 1023.15 377.884 1020.03 377.079C1016.91 376.274 1013.64 376.204 1010.49 376.876L1011.01 387.589L1005.95 378.408C1000.97 380.745 997.129 384.962 995.262 390.131C994.599 391.941 994.196 393.837 994.065 395.761C993.745 400.274 994.905 404.769 997.369 408.564C999.833 412.359 1003.47 415.248 1007.72 416.792V416.792Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M1029.4 357.588C1030.59 354.308 1032.58 351.38 1035.2 349.073C1037.82 346.767 1040.97 345.157 1044.38 344.391L1046.09 354.574L1049.27 343.879C1053.68 343.944 1057.96 345.41 1061.48 348.064C1065 350.718 1067.59 354.423 1068.87 358.645C1070.15 362.866 1070.06 367.386 1068.6 371.551C1067.15 375.715 1064.41 379.31 1060.78 381.815C1057.15 384.32 1052.81 385.607 1048.4 385.489C1043.99 385.371 1039.73 383.854 1036.24 381.158C1032.75 378.462 1030.21 374.726 1028.98 370.49C1027.74 366.253 1027.89 361.735 1029.4 357.588H1029.4Z" fill="#F25042"/>
                        <path d="M1030.54 353.911C1031.73 350.631 1033.72 347.703 1036.34 345.396C1038.96 343.09 1042.12 341.479 1045.52 340.713L1047.23 350.897L1050.41 340.201C1054.82 340.267 1059.1 341.732 1062.62 344.387C1066.15 347.041 1068.74 350.746 1070.02 354.968C1071.3 359.189 1071.2 363.709 1069.75 367.873C1068.29 372.038 1065.55 375.633 1061.92 378.138C1058.29 380.643 1053.96 381.93 1049.55 381.812C1045.14 381.694 1040.88 380.177 1037.38 377.481C1033.89 374.785 1031.35 371.049 1030.12 366.813C1028.89 362.576 1029.04 358.058 1030.54 353.911H1030.54Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M1044.99 467.604C1049.8 469.347 1055.07 469.261 1059.82 467.363C1064.56 465.464 1068.44 461.886 1070.72 457.311C1072.99 452.735 1073.51 447.482 1072.16 442.553C1070.81 437.623 1067.7 433.362 1063.41 430.582L1060.97 438.801L1059.24 428.497C1059.22 428.489 1059.2 428.482 1059.18 428.477C1056.62 427.543 1053.89 427.125 1051.16 427.246C1048.42 427.367 1045.74 428.025 1043.27 429.182C1040.79 430.339 1038.56 431.973 1036.72 433.991C1034.87 436.008 1033.44 438.369 1032.51 440.94C1031.58 443.51 1031.16 446.238 1031.29 448.97C1031.41 451.701 1032.07 454.381 1033.23 456.857C1034.39 459.334 1036.02 461.557 1038.04 463.401C1040.06 465.245 1042.42 466.674 1044.99 467.604H1044.99Z" fill="#F25042"/>
                        <path d="M1045.98 463.88C1050.79 465.622 1056.06 465.536 1060.81 463.638C1065.55 461.74 1069.43 458.162 1071.71 453.586C1073.99 449.011 1074.5 443.758 1073.15 438.828C1071.8 433.899 1068.69 429.638 1064.4 426.857L1061.96 435.076L1060.23 424.772C1060.21 424.764 1060.19 424.758 1060.17 424.752C1057.61 423.818 1054.88 423.4 1052.15 423.521C1049.41 423.642 1046.73 424.3 1044.26 425.457C1041.78 426.615 1039.55 428.249 1037.71 430.266C1035.86 432.284 1034.43 434.645 1033.5 437.215C1032.57 439.785 1032.15 442.514 1032.28 445.245C1032.4 447.976 1033.06 450.656 1034.22 453.133C1035.38 455.609 1037.01 457.833 1039.03 459.677C1041.05 461.521 1043.41 462.949 1045.98 463.88H1045.98Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M1023.32 502.167C1024.15 506.867 1026.57 511.14 1030.17 514.27C1033.77 517.4 1038.34 519.195 1043.11 519.356C1047.88 519.517 1052.56 518.032 1056.37 515.152C1060.17 512.272 1062.87 508.171 1064.01 503.537C1065.15 498.903 1064.66 494.018 1062.63 489.701C1060.59 485.384 1057.14 481.897 1052.84 479.826C1048.54 477.755 1043.66 477.225 1039.02 478.326C1034.37 479.426 1030.25 482.09 1027.33 485.87L1036.61 499.826L1023.94 492.418C1022.95 495.572 1022.74 498.915 1023.32 502.167V502.167Z" fill="#F25042"/>
                        <path d="M1024.18 499.409C1025.01 504.109 1027.42 508.382 1031.03 511.512C1034.63 514.642 1039.2 516.437 1043.97 516.598C1048.74 516.759 1053.42 515.274 1057.22 512.394C1061.03 509.514 1063.73 505.413 1064.87 500.779C1066.01 496.145 1065.52 491.26 1063.49 486.943C1061.45 482.626 1058 479.139 1053.7 477.068C1049.4 474.997 1044.52 474.467 1039.87 475.568C1035.23 476.668 1031.1 479.332 1028.19 483.112L1037.46 497.068L1024.79 489.661C1023.81 492.814 1023.6 496.157 1024.18 499.409V499.409Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M9.00746 470.249C10.9978 470.972 13.1289 471.224 15.2329 470.983C17.337 470.743 19.3563 470.017 21.1319 468.862C22.9075 467.708 24.3908 466.157 25.4648 464.332C26.5388 462.507 27.1742 460.457 27.3208 458.345C27.4675 456.232 27.1215 454.114 26.3101 452.158C25.4987 450.202 24.244 448.461 22.645 447.073C21.0459 445.684 19.1463 444.686 17.0957 444.157C15.0451 443.628 12.8997 443.582 10.8285 444.024L11.1707 451.062L7.84085 445.03C4.57278 446.566 2.04805 449.336 0.821494 452.732C0.385892 453.922 0.121078 455.167 0.034953 456.431C-0.17523 459.397 0.586979 462.35 2.20607 464.843C3.82517 467.337 6.2129 469.234 9.00746 470.249V470.249Z" fill="#F25042"/>
                        <path d="M25.4837 551.879C24.3083 545.893 29.4017 540.587 34.4329 537.138C39.464 533.689 45.3427 530.3 47.0593 524.446C49.5264 516.034 42.1776 508.33 36.4579 501.686C32.2144 496.756 28.5702 491.34 25.6016 485.551C24.311 483.278 23.4319 480.794 23.0049 478.215C22.5539 474.486 23.7519 470.775 24.9588 467.219C28.9794 455.37 33.2782 443.62 37.8551 431.97" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M9.57064 468.437C11.5609 469.16 13.6921 469.412 15.7961 469.171C17.9001 468.931 19.9195 468.205 21.6951 467.05C23.4707 465.896 24.9539 464.345 26.0279 462.52C27.1019 460.695 27.7373 458.645 27.884 456.533C28.0307 454.42 27.6847 452.302 26.8733 450.346C26.0618 448.39 24.8072 446.649 23.2081 445.261C21.6091 443.872 19.7094 442.874 17.6589 442.345C15.6083 441.816 13.4628 441.77 11.3916 442.212L11.7339 449.25L8.40403 443.218C5.13595 444.754 2.61122 447.524 1.38467 450.92C0.949069 452.11 0.684259 453.355 0.598129 454.619C0.387932 457.585 1.15014 460.538 2.76923 463.031C4.38833 465.525 6.77607 467.422 9.57064 468.437V468.437Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M23.8124 429.539C24.5935 427.384 25.9044 425.46 27.6244 423.945C29.3444 422.429 31.4181 421.371 33.6545 420.868L34.7803 427.559L36.8677 420.532C39.7659 420.575 42.5754 421.537 44.8907 423.281C47.206 425.025 48.9071 427.46 49.7486 430.233C50.5901 433.007 50.5283 435.976 49.5723 438.712C48.6162 441.449 46.8152 443.81 44.4295 445.456C42.0437 447.102 39.1966 447.948 36.2991 447.87C33.4016 447.793 30.6038 446.796 28.3095 445.025C26.0152 443.254 24.3432 440.799 23.5349 438.016C22.7265 435.232 22.8237 432.264 23.8124 429.539V429.539Z" fill="#F25042"/>
                        <path d="M24.5632 427.123C25.3443 424.968 26.6552 423.044 28.3752 421.529C30.0952 420.013 32.169 418.955 34.4053 418.452L35.5312 425.143L37.6186 418.116C40.5168 418.158 43.3263 419.121 45.6415 420.865C47.9568 422.609 49.658 425.044 50.4995 427.817C51.3409 430.591 51.2792 433.56 50.3231 436.296C49.367 439.033 47.5661 441.394 45.1803 443.04C42.7946 444.686 39.9474 445.532 37.0499 445.454C34.1525 445.377 31.3546 444.38 29.0603 442.609C26.7661 440.838 25.094 438.383 24.2857 435.599C23.4774 432.816 23.5746 429.848 24.5632 427.123V427.123Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M34.0576 501.822C37.214 502.967 40.6813 502.91 43.7987 501.663C46.9162 500.416 49.4656 498.065 50.9612 495.059C52.4568 492.052 52.7939 488.601 51.9083 485.362C51.0227 482.124 48.9763 479.324 46.1592 477.497L44.5553 482.897L43.418 476.127C43.4067 476.122 43.3951 476.118 43.3832 476.114C41.6948 475.5 39.9021 475.225 38.1073 475.304C36.3126 475.384 34.551 475.816 32.9234 476.576C31.2957 477.336 29.8338 478.41 28.6213 479.736C27.4088 481.061 26.4693 482.613 25.8567 484.301C25.2441 485.99 24.9703 487.783 25.0509 489.578C25.1315 491.373 25.565 493.134 26.3266 494.761C27.0882 496.388 28.163 497.849 29.4895 499.061C30.816 500.272 32.3683 501.21 34.0576 501.822V501.822Z" fill="#F25042"/>
                        <path d="M34.7081 499.374C37.8645 500.519 41.3319 500.463 44.4493 499.216C47.5667 497.968 50.1162 495.618 51.6118 492.611C53.1074 489.605 53.4445 486.154 52.5589 482.915C51.6733 479.676 49.6269 476.877 46.8098 475.05L45.2059 480.45L44.0685 473.68C44.0573 473.675 44.0457 473.67 44.0337 473.667C42.3458 473.055 40.5537 472.781 38.7599 472.861C36.9661 472.941 35.2057 473.374 33.5791 474.135C30.2941 475.671 27.7539 478.449 26.5172 481.858C25.2806 485.267 25.4488 489.028 26.9849 492.313C28.521 495.597 31.2991 498.138 34.7081 499.374V499.374Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M19.822 524.53C20.3647 527.618 21.9528 530.426 24.3198 532.482C26.6868 534.538 29.6889 535.718 32.8226 535.823C35.9562 535.929 39.0309 534.954 41.5309 533.061C44.0309 531.169 45.8042 528.475 46.5535 525.43C47.3027 522.385 46.9823 519.176 45.6459 516.339C44.3096 513.503 42.0386 511.212 39.2139 509.852C36.3891 508.491 33.1823 508.143 30.1314 508.866C27.0804 509.589 24.3708 511.339 22.457 513.822L28.5493 522.992L20.2249 518.125C19.5795 520.197 19.4413 522.393 19.822 524.53V524.53Z" fill="#F25042"/>
                        <path d="M20.3851 522.718C20.9278 525.806 22.5159 528.614 24.8829 530.67C27.25 532.726 30.252 533.906 33.3857 534.011C36.5194 534.117 39.594 533.142 42.094 531.249C44.594 529.357 46.3673 526.663 47.1166 523.618C47.8658 520.573 47.5454 517.364 46.2091 514.527C44.8727 511.691 42.6017 509.4 39.777 508.039C36.9522 506.679 33.7454 506.331 30.6945 507.054C27.6435 507.777 24.9339 509.527 23.0201 512.01L29.1124 521.18L20.788 516.313C20.1426 518.385 20.0044 520.581 20.3851 522.718V522.718Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M480.946 341.116C490.335 341.116 497.946 331.266 497.946 319.116C497.946 306.965 490.335 297.116 480.946 297.116C471.557 297.116 463.946 306.965 463.946 319.116C463.946 331.266 471.557 341.116 480.946 341.116Z" fill="#EADDCF"/>
                        <path d="M573.446 341.616C582.835 341.616 590.446 331.766 590.446 319.616C590.446 307.465 582.835 297.616 573.446 297.616C564.057 297.616 556.446 307.465 556.446 319.616C556.446 331.766 564.057 341.616 573.446 341.616Z" fill="#EADDCF"/>
                        <path d="M560.446 384.616C560.446 394.556 546.566 402.616 529.446 402.616C512.326 402.616 498.446 394.556 498.446 384.616C498.446 376.006 508.856 368.806 522.766 367.046C524.981 366.753 527.212 366.61 529.446 366.616C533.189 366.603 536.922 367.006 540.576 367.816C552.196 370.406 560.446 376.956 560.446 384.616Z" fill="#EADDCF"/>
                        <path d="M484.946 336.116C494.335 336.116 501.946 326.266 501.946 314.116C501.946 301.965 494.335 292.116 484.946 292.116C475.557 292.116 467.946 301.965 467.946 314.116C467.946 326.266 475.557 336.116 484.946 336.116Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M577.446 336.616C586.835 336.616 594.446 326.766 594.446 314.616C594.446 302.465 586.835 292.616 577.446 292.616C568.057 292.616 560.446 302.465 560.446 314.616C560.446 326.766 568.057 336.616 577.446 336.616Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M533.446 397.616C550.567 397.616 564.446 389.557 564.446 379.616C564.446 369.674 550.567 361.616 533.446 361.616C516.325 361.616 502.446 369.674 502.446 379.616C502.446 389.557 516.325 397.616 533.446 397.616Z" stroke="#EADDCF" stroke-miterlimit="10"/>
                        <path d="M540.946 369.316C540.954 370.573 540.482 371.786 539.626 372.708C539.222 373.149 538.73 373.502 538.183 373.744C537.636 373.986 537.044 374.113 536.446 374.116H526.446C525.214 374.073 524.049 373.544 523.205 372.644C522.362 371.745 521.909 370.548 521.946 369.316C521.941 368.341 522.226 367.386 522.766 366.574C524.979 366.263 527.211 366.109 529.446 366.116C533.193 366.103 536.929 366.533 540.576 367.396C540.823 368.005 540.948 368.658 540.946 369.316V369.316Z" fill="white"/>
                        <path d="M484.946 313.116C487.707 313.116 489.946 310.877 489.946 308.116C489.946 305.354 487.707 303.116 484.946 303.116C482.185 303.116 479.946 305.354 479.946 308.116C479.946 310.877 482.185 313.116 484.946 313.116Z" fill="white"/>
                        <path d="M577.946 313.116C580.707 313.116 582.946 310.877 582.946 308.116C582.946 305.354 580.707 303.116 577.946 303.116C575.185 303.116 572.946 305.354 572.946 308.116C572.946 310.877 575.185 313.116 577.946 313.116Z" fill="white"/>
                        <path opacity="0.3" d="M582.946 360.116C585.707 360.116 587.946 357.877 587.946 355.116C587.946 352.354 585.707 350.116 582.946 350.116C580.185 350.116 577.946 352.354 577.946 355.116C577.946 357.877 580.185 360.116 582.946 360.116Z" fill="#8C7851"/>
                        <path opacity="0.3" d="M460.946 360.116C463.707 360.116 465.946 357.877 465.946 355.116C465.946 352.354 463.707 350.116 460.946 350.116C458.185 350.116 455.946 352.354 455.946 355.116C455.946 357.877 458.185 360.116 460.946 360.116Z" fill="#8C7851"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="1074.39" height="584.231" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <p>Oops! Seems your lost 🤷‍♂️, You should go back home to continue your visit!</p>
                    <div className="code-404__content-cta">
                        <button className="code-button code-button--medium">
                                <Link to="/" className="code-link">Back to Homepage</Link>  
                        </button>
                    </div>
                </div>
                
            </div>
    );
  }

export default NoMatch