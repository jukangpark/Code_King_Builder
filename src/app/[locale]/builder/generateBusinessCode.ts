const generateBusinessCode = () => {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>테크솔루션즈 - 전문 IT 서비스</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-white">


    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                혁신적인
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">디지털 솔루션</span>
            </h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                최신 기술을 활용하여 비즈니스의 디지털 전환을 도와드립니다. 
                웹 개발, 모바일 앱, 클라우드 솔루션까지 모든 것을 제공합니다.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <i class="fas fa-play mr-2"></i>
                    서비스 소개
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
                    <i class="fas fa-phone mr-2"></i>
                    상담 문의
                </button>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">서비스</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    비즈니스 성장을 위한 다양한 IT 서비스를 제공합니다.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-laptop-code text-2xl text-purple-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">웹 개발</h3>
                    <p class="text-gray-600 mb-4">반응형 웹사이트와 웹 애플리케이션을 개발하여 온라인 존재감을 강화합니다.</p>
                    <ul class="text-sm text-gray-500 space-y-2">
                        <li>• 반응형 웹사이트</li>
                        <li>• E-commerce 플랫폼</li>
                        <li>• 웹 애플리케이션</li>
                    </ul>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-mobile-alt text-2xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">모바일 앱</h3>
                    <p class="text-gray-600 mb-4">iOS와 Android 플랫폼을 위한 네이티브 및 크로스 플랫폼 앱을 개발합니다.</p>
                    <ul class="text-sm text-gray-500 space-y-2">
                        <li>• iOS 앱 개발</li>
                        <li>• Android 앱 개발</li>
                        <li>• React Native</li>
                    </ul>
                </div>
                <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <i class="fas fa-cloud text-2xl text-green-600"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">클라우드 솔루션</h3>
                    <p class="text-gray-600 mb-4">AWS, Azure, GCP를 활용한 클라우드 인프라 구축 및 관리 서비스를 제공합니다.</p>
                    <ul class="text-sm text-gray-500 space-y-2">
                        <li>• 클라우드 마이그레이션</li>
                        <li>• 서버리스 아키텍처</li>
                        <li>• DevOps 자동화</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">회사 소개</h2>
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                        테크솔루션즈는 2019년 설립된 IT 전문 회사로, 최신 기술 트렌드를 반영한 
                        혁신적인 디지털 솔루션을 제공합니다.
                    </p>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        우리는 고객의 비즈니스 목표를 이해하고, 이를 달성하기 위한 최적의 
                        기술적 해결책을 제시합니다.
                    </p>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600 mb-2">50+</div>
                            <div class="text-gray-600">완료 프로젝트</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-600 mb-2">30+</div>
                            <div class="text-gray-600">만족 고객</div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm">
                    <h3 class="text-xl font-semibold text-gray-900 mb-6">핵심 가치</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-semibold text-gray-900">혁신</h4>
                                <p class="text-gray-600 text-sm">최신 기술을 활용한 혁신적인 솔루션</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-semibold text-gray-900">품질</h4>
                                <p class="text-gray-600 text-sm">높은 품질의 코드와 사용자 경험</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-semibold text-gray-900">신뢰</h4>
                                <p class="text-gray-600 text-sm">고객과의 장기적인 신뢰 관계 구축</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">팀</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    각 분야의 전문가들이 모여 최고의 결과물을 만들어냅니다.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-user text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">김개발</h3>
                    <p class="text-purple-600 mb-4">CEO & Lead Developer</p>
                    <p class="text-gray-600 text-sm">10년간의 웹 개발 경험을 바탕으로 프로젝트를 이끌어갑니다.</p>
                </div>
                <div class="text-center">
                    <div class="w-32 h-32 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-user text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">이디자인</h3>
                    <p class="text-purple-600 mb-4">UI/UX Designer</p>
                    <p class="text-gray-600 text-sm">사용자 중심의 직관적인 디자인을 만드는 전문가입니다.</p>
                </div>
                <div class="text-center">
                    <div class="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-user text-white text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">박클라우드</h3>
                    <p class="text-purple-600 mb-4">DevOps Engineer</p>
                    <p class="text-gray-600 text-sm">클라우드 인프라와 CI/CD 파이프라인을 구축합니다.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">연락처</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
                </p>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="bg-white p-8 rounded-xl shadow-sm">
                    <h3 class="text-xl font-semibold text-gray-900 mb-6">연락 정보</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-purple-600 mr-3"></i>
                            <span class="text-gray-600">contact@techsolutions.kr</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-phone text-purple-600 mr-3"></i>
                            <span class="text-gray-600">02-1234-5678</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-map-marker-alt text-purple-600 mr-3"></i>
                            <span class="text-gray-600">서울시 강남구 테헤란로 123</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-clock text-purple-600 mr-3"></i>
                            <span class="text-gray-600">월-금 9:00 - 18:00</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm">
                    <h3 class="text-xl font-semibold text-gray-900 mb-6">소셜 미디어</h3>
                    <div class="flex space-x-4 mb-6">
                        <a href="#" class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#" class="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        무료 상담 신청
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 테크솔루션즈. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
};

export default generateBusinessCode;
