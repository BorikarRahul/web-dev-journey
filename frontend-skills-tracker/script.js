// Frontend Developer Skills Data
const frontendSkills = [
    {
        id: 1,
        title: "Core Technologies",
        description: "Understanding the fundamental building blocks of web development",
        category: "fundamentals",
        difficulty: "beginner",
        subtopics: [
            "HTML5 semantic elements and structure",
            "CSS3 styling and layout techniques",
            "JavaScript ES6+ features and syntax",
            "DOM manipulation and events",
            "CSS Grid and Flexbox layouts",
            "Responsive design principles",
            "CSS custom properties (variables)",
            "JavaScript modules and imports",
            "Async JavaScript (Promises, async/await)",
            "Event handling and delegation"
        ]
    },
    {
        id: 2,
        title: "Accessibility",
        description: "Making web applications usable for everyone",
        category: "user-experience",
        difficulty: "intermediate",
        subtopics: [
            "WCAG 2.1 guidelines and principles",
            "Semantic HTML for screen readers",
            "ARIA labels and roles",
            "Keyboard navigation support",
            "Color contrast requirements",
            "Focus management and indicators",
            "Alt text for images",
            "Form accessibility best practices",
            "Testing with screen readers",
            "Accessibility audit tools"
        ]
    },
    {
        id: 3,
        title: "Version Control",
        description: "Managing code changes and collaboration",
        category: "tools",
        difficulty: "beginner",
        subtopics: [
            "Git fundamentals and commands",
            "Branching and merging strategies",
            "Pull requests and code reviews",
            "GitHub/GitLab workflow",
            "Commit message best practices",
            "Resolving merge conflicts",
            "Git hooks and automation",
            "Version control best practices",
            "Collaborative development workflows",
            "Git history management"
        ]
    },
    {
        id: 4,
        title: "Responsive Design",
        description: "Creating websites that work on all devices",
        category: "design",
        difficulty: "intermediate",
        subtopics: [
            "Mobile-first design approach",
            "CSS media queries",
            "Flexible grid systems",
            "Responsive images and media",
            "Touch-friendly interfaces",
            "Viewport meta tag",
            "Breakpoint strategies",
            "Performance optimization for mobile",
            "Progressive enhancement",
            "Cross-browser compatibility"
        ]
    },
    {
        id: 5,
        title: "User Experience (UX)",
        description: "Creating intuitive and enjoyable user interfaces",
        category: "user-experience",
        difficulty: "intermediate",
        subtopics: [
            "UX design principles",
            "User research and personas",
            "Information architecture",
            "Wireframing and prototyping",
            "Usability testing methods",
            "User journey mapping",
            "Interaction design patterns",
            "Visual hierarchy and typography",
            "Micro-interactions and animations",
            "Error handling and feedback"
        ]
    },
    {
        id: 6,
        title: "SEO",
        description: "Optimizing websites for search engines",
        category: "marketing",
        difficulty: "intermediate",
        subtopics: [
            "On-page SEO fundamentals",
            "Meta tags and structured data",
            "Page speed optimization",
            "Mobile-friendly design",
            "URL structure and sitemaps",
            "Content optimization",
            "Technical SEO audit",
            "Core Web Vitals",
            "Schema markup implementation",
            "Local SEO considerations"
        ]
    },
    {
        id: 7,
        title: "RESTful APIs",
        description: "Working with web services and data",
        category: "backend",
        difficulty: "intermediate",
        subtopics: [
            "HTTP methods and status codes",
            "API design principles",
            "Fetch API and XMLHttpRequest",
            "JSON data handling",
            "Error handling and status codes",
            "Authentication and authorization",
            "CORS and security",
            "API documentation reading",
            "Testing API endpoints",
            "GraphQL basics"
        ]
    },
    {
        id: 8,
        title: "Testing and Debugging",
        description: "Ensuring code quality and reliability",
        category: "quality",
        difficulty: "intermediate",
        subtopics: [
            "Browser developer tools",
            "Console debugging techniques",
            "Unit testing with Jest",
            "Integration testing",
            "End-to-end testing with Cypress",
            "Performance testing",
            "Cross-browser testing",
            "Error tracking and monitoring",
            "Code quality tools (ESLint, Prettier)",
            "Debugging production issues"
        ]
    },
    {
        id: 9,
        title: "Developer Tools",
        description: "Mastering browser and development tools",
        category: "tools",
        difficulty: "intermediate",
        subtopics: [
            "Chrome DevTools mastery",
            "Network tab analysis",
            "Performance profiling",
            "Memory leak detection",
            "Source maps and debugging",
            "Application tab and storage",
            "Security tab analysis",
            "Lighthouse audits",
            "Browser extensions for developers",
            "Command line tools"
        ]
    },
    {
        id: 10,
        title: "Frontend Frameworks",
        description: "Building scalable applications with modern frameworks",
        category: "frameworks",
        difficulty: "advanced",
        subtopics: [
            "React fundamentals and hooks",
            "Vue.js composition API",
            "Angular components and services",
            "State management (Redux, Vuex, NgRx)",
            "Component lifecycle methods",
            "Routing and navigation",
            "Form handling and validation",
            "Testing React/Vue components",
            "Performance optimization",
            "Build tools and bundlers"
        ]
    },
    {
        id: 11,
        title: "Web Performance",
        description: "Optimizing for speed and user experience",
        category: "performance",
        difficulty: "advanced",
        subtopics: [
            "Core Web Vitals metrics",
            "Image optimization techniques",
            "Code splitting and lazy loading",
            "Caching strategies",
            "Minification and compression",
            "Critical rendering path",
            "Service workers and PWA",
            "Performance monitoring tools",
            "Bundle size optimization",
            "Server-side rendering (SSR)"
        ]
    },
    {
        id: 12,
        title: "TypeScript",
        description: "Adding type safety to JavaScript",
        category: "languages",
        difficulty: "advanced",
        subtopics: [
            "TypeScript basics and setup",
            "Type annotations and interfaces",
            "Generics and utility types",
            "Advanced types and type guards",
            "TypeScript with React/Vue",
            "Configuration and tsconfig.json",
            "Type definitions and @types",
            "Strict mode and best practices",
            "Migration from JavaScript",
            "TypeScript tooling and IDE support"
        ]
    },
    {
        id: 13,
        title: "JavaScript Fundamentals",
        description: "Core concepts of JavaScript, including variables, data types, and operators.",
        category: "fundamentals",
        difficulty: "beginner",
        subtopics: [
            "What is JavaScript?",
            "History of JavaScript",
            "JavaScript Features",
            "How to run JavaScript",
            "Variable Declarations (var, let, const)",
            "Hoisting",
            "Variable Naming Rules",
            "Variable Scopes (Block, Function, Global)",
            "Primitive Data Types (string, number, boolean, null, undefined, Symbol, BigInt)",
            "Object Data Type",
            "`typeof` operator",
            "Type Coercion (Implicit vs Explicit)",
            "Equality Comparisons (== vs === vs Object.is)",
            "Arithmetic, Comparison, Logical, and Assignment Operators"
        ]
    },
    {
        id: 14,
        title: "JavaScript Control Flow",
        description: "Managing the flow of execution in JavaScript with loops, conditionals, and error handling.",
        category: "fundamentals",
        difficulty: "beginner",
        subtopics: [
            "`if...else` statements",
            "`switch` statements",
            "`for` loop",
            "`while` & `do...while` loops",
            "`for...in` & `for...of` loops",
            "`break` and `continue`",
            "`try...catch...finally` for error handling",
            "`throw` custom errors",
            "Error Objects"
        ]
    },
    {
        id: 15,
        title: "JavaScript Data Structures",
        description: "Understanding and using JavaScript's built-in data structures.",
        category: "fundamentals",
        difficulty: "intermediate",
        subtopics: [
            "Arrays and Array Methods (map, filter, reduce, etc.)",
            "Objects",
            "JSON format",
            "Maps and Sets",
            "WeakMaps & WeakSets",
            "Typed Arrays"
        ]
    },
    {
        id: 16,
        title: "JavaScript Functions",
        description: "Mastering functions, scope, and closures in JavaScript.",
        category: "fundamentals",
        difficulty: "intermediate",
        subtopics: [
            "Function Declarations vs Expressions",
            "Arrow Functions",
            "Function Parameters (Default, Rest)",
            "Immediately Invoked Function Expressions (IIFEs)",
            "Scope (Global, Function, Block)",
            "Lexical Scoping and Closures",
            "Recursion",
            "Higher-Order Functions"
        ]
    },
    {
        id: 17,
        title: "Asynchronous JavaScript",
        description: "Handling asynchronous operations with callbacks, Promises, and async/await.",
        category: "backend",
        difficulty: "advanced",
        subtopics: [
            "The Event Loop",
            "Callbacks & Callback Hell",
            "setTimeout & setInterval",
            "Promises (`.then`, `.catch`, `.finally`)",
            "Promise.all, Promise.race, etc.",
            "`async/await` syntax",
            "Fetch API for network requests",
            "XMLHttpRequest (Legacy)"
        ]
    },
    {
        id: 18,
        title: "The 'this' Keyword & Prototypes",
        description: "Understanding JavaScript's `this` context and prototypal inheritance.",
        category: "fundamentals",
        difficulty: "advanced",
        subtopics: [
            "`this` in Global, Function, and Arrow Function Context",
            "`this` in a Method",
            "Prototypal Inheritance and the Prototype Chain",
            "`call()`, `apply()`, and `bind()`"
        ]
    },
    {
        id: 19,
        title: "Advanced JavaScript Topics",
        description: "Exploring modern and advanced features of JavaScript.",
        category: "tools",
        difficulty: "advanced",
        subtopics: [
            "ESM (ECMAScript Modules)",
            "Iterators and Generators",
            "DOM APIs",
            "Memory Management (Lifecycle, Garbage Collection)",
            "Browser DevTools for Debugging (Issues, Memory, Performance)"
        ]
    }
];

// Local Storage Keys
const STORAGE_KEY = 'frontend-skills-progress';
const ACHIEVEMENTS_KEY = 'frontend-skills-achievements';
const SETTINGS_KEY = 'frontend-skills-settings';

// DOM Elements
let skillsContainer;
let completedCountElement;
let totalCountElement;
let progressPercentageElement;
let progressFillElement;
let searchInput;
let filterSelect;
let difficultyFilter;
let categoryFilter;
let achievementsContainer;
let settingsContainer;

// App State
let currentFilter = 'all';
let currentDifficulty = 'all';
let currentCategory = 'all';
let searchQuery = '';
let showCompleted = true;
let showIncomplete = true;
let soundEnabled = true;
let animationsEnabled = true;

// Achievement System
const achievements = [
    { id: 'first-complete', title: 'First Steps', description: 'Complete your first subtopic', icon: '🎯', unlocked: false },
    { id: '10-complete', title: 'Getting Started', description: 'Complete 10 subtopics', icon: '🚀', unlocked: false },
    { id: '25-complete', title: 'Making Progress', description: 'Complete 25 subtopics', icon: '📈', unlocked: false },
    { id: '50-complete', title: 'Halfway There', description: 'Complete 50 subtopics', icon: '🎉', unlocked: false },
    { id: '100-complete', title: 'Century Club', description: 'Complete 100 subtopics', icon: '🏆', unlocked: false },
    { id: 'skill-master', title: 'Skill Master', description: 'Complete all subtopics in one skill', icon: '👑', unlocked: false },
    { id: 'perfect-score', title: 'Perfect Score', description: 'Complete all subtopics', icon: '💎', unlocked: false },
    { id: 'streak-7', title: 'Week Warrior', description: 'Use the app for 7 consecutive days', icon: '🔥', unlocked: false },
    { id: 'streak-30', title: 'Monthly Master', description: 'Use the app for 30 consecutive days', icon: '⭐', unlocked: false }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    loadProgress();
    loadSettings();
    loadAchievements();
    renderSkills();
    updateProgressDisplay();
    addInteractiveFeatures();
    addSkipLink();
    checkForNewAchievements();
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
});

function initializeElements() {
    skillsContainer = document.getElementById('skills-container');
    completedCountElement = document.getElementById('completed-count');
    totalCountElement = document.getElementById('total-count');
    progressPercentageElement = document.getElementById('progress-percentage');
    progressFillElement = document.getElementById('progress-fill');
}

function addInteractiveFeatures() {
    addSearchAndFilters();
    addAchievementsPanel();
    addSettingsPanel();
    addConfettiEffect();
    addSoundEffects();
    addTooltips();
    addAnimations();
}

function addSearchAndFilters() {
    const progressSection = document.querySelector('.progress-overview');
    
    // Search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-box">
            <input type="text" id="search-input" placeholder="Search skills and subtopics..." class="search-input">
            <span class="search-icon">🔍</span>
        </div>
    `;
    
    // Filters
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'filters-container';
    filtersContainer.innerHTML = `
        <div class="filter-group">
            <label for="difficulty-filter">Difficulty:</label>
            <select id="difficulty-filter" class="filter-select">
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
        <div class="filter-group">
            <label for="category-filter">Category:</label>
            <select id="category-filter" class="filter-select">
                <option value="all">All Categories</option>
                <option value="fundamentals">Fundamentals</option>
                <option value="design">Design</option>
                <option value="frameworks">Frameworks</option>
                <option value="tools">Tools</option>
                <option value="performance">Performance</option>
                <option value="quality">Quality</option>
                <option value="user-experience">User Experience</option>
                <option value="backend">Backend</option>
                <option value="marketing">Marketing</option>
                <option value="languages">Languages</option>
            </select>
        </div>
        <div class="filter-group">
            <label class="checkbox-wrapper">
                <input type="checkbox" id="show-completed" checked>
                <span class="custom-checkbox"></span>
                Show Completed
            </label>
        </div>
        <div class="filter-group">
            <label class="checkbox-wrapper">
                <input type="checkbox" id="show-incomplete" checked>
                <span class="custom-checkbox"></span>
                Show Incomplete
            </label>
        </div>
    `;
    
    progressSection.appendChild(searchContainer);
    progressSection.appendChild(filtersContainer);
    
    // Event listeners
    searchInput = document.getElementById('search-input');
    difficultyFilter = document.getElementById('difficulty-filter');
    categoryFilter = document.getElementById('category-filter');
    
    searchInput.addEventListener('input', filterSkills);
    difficultyFilter.addEventListener('change', filterSkills);
    categoryFilter.addEventListener('change', filterSkills);
    document.getElementById('show-completed').addEventListener('change', filterSkills);
    document.getElementById('show-incomplete').addEventListener('change', filterSkills);
}

function addAchievementsPanel() {
    const mainContainer = document.querySelector('.main .container');
    
    const achievementsSection = document.createElement('section');
    achievementsSection.className = 'achievements-section';
    achievementsSection.innerHTML = `
        <h2 class="section-title">Achievements</h2>
        <div class="achievements-grid" id="achievements-container"></div>
    `;
    
    mainContainer.appendChild(achievementsSection);
    achievementsContainer = document.getElementById('achievements-container');
    renderAchievements();
}

function addSettingsPanel() {
    const mainContainer = document.querySelector('.main .container');
    
    const settingsSection = document.createElement('section');
    settingsSection.className = 'settings-section';
    settingsSection.innerHTML = `
        <h2 class="section-title">Settings</h2>
        <div class="settings-grid" id="settings-container"></div>
    `;
    
    mainContainer.appendChild(settingsSection);
    settingsContainer = document.getElementById('settings-container');
    renderSettings();
}

function renderSettings() {
    settingsContainer.innerHTML = `
        <div class="setting-item">
            <label class="checkbox-wrapper">
                <input type="checkbox" id="sound-enabled" ${soundEnabled ? 'checked' : ''}>
                <span class="custom-checkbox"></span>
                Sound Effects
            </label>
        </div>
        <div class="setting-item">
            <label class="checkbox-wrapper">
                <input type="checkbox" id="animations-enabled" ${animationsEnabled ? 'checked' : ''}>
                <span class="custom-checkbox"></span>
                Animations
            </label>
        </div>
        <div class="setting-item">
            <button class="btn btn-secondary" onclick="resetProgress()">Reset All Progress</button>
        </div>
        <div class="setting-item">
            <button class="btn btn-secondary" onclick="exportProgress()">Export Progress</button>
        </div>
        <div class="setting-item">
            <button class="btn btn-secondary" onclick="importProgress()">Import Progress</button>
        </div>
    `;
    
    // Event listeners
    document.getElementById('sound-enabled').addEventListener('change', function(e) {
        soundEnabled = e.target.checked;
        saveSettings();
    });
    
    document.getElementById('animations-enabled').addEventListener('change', function(e) {
        animationsEnabled = e.target.checked;
        saveSettings();
    });
}

function renderAchievements() {
    achievementsContainer.innerHTML = achievements.map(achievement => `
        <div class="achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}" 
             data-achievement-id="${achievement.id}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-description">${achievement.description}</p>
            </div>
            <div class="achievement-status">
                ${achievement.unlocked ? '✅' : '🔒'}
            </div>
        </div>
    `).join('');
}

function filterSkills() {
    searchQuery = searchInput.value.toLowerCase();
    currentDifficulty = difficultyFilter.value;
    currentCategory = categoryFilter.value;
    showCompleted = document.getElementById('show-completed').checked;
    showIncomplete = document.getElementById('show-incomplete').checked;
    
    const filteredSkills = frontendSkills.filter(skill => {
        // Search filter
        const matchesSearch = skill.title.toLowerCase().includes(searchQuery) ||
                            skill.description.toLowerCase().includes(searchQuery) ||
                            skill.subtopics.some(subtopic => subtopic.toLowerCase().includes(searchQuery));
        
        // Difficulty filter
        const matchesDifficulty = currentDifficulty === 'all' || skill.difficulty === currentDifficulty;
        
        // Category filter
        const matchesCategory = currentCategory === 'all' || skill.category === currentCategory;
        
        return matchesSearch && matchesDifficulty && matchesCategory;
    });
    
    renderFilteredSkills(filteredSkills);
}

function renderFilteredSkills(filteredSkills) {
    skillsContainer.innerHTML = '';
    
    if (filteredSkills.length === 0) {
        skillsContainer.innerHTML = `
            <div class="no-results">
                <h3>No skills found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    filteredSkills.forEach(skill => {
        const skillElement = createSkillElement(skill);
        skillsContainer.appendChild(skillElement);
    });
    
    // Add animation
    if (animationsEnabled) {
        const cards = skillsContainer.querySelectorAll('.skill-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }
}

function createSkillElement(skill) {
    const skillCard = document.createElement('article');
    skillCard.className = 'skill-card';
    skillCard.setAttribute('aria-labelledby', `skill-title-${skill.id}`);
    
    const skillProgress = getSkillProgress(skill.id);
    const isCompleted = skillProgress.percentage === 100;
    
    skillCard.innerHTML = `
        <div class="skill-header">
            <div class="skill-info">
                <h3 class="skill-title" id="skill-title-${skill.id}">${skill.title}</h3>
                <div class="skill-meta">
                    <span class="skill-difficulty ${skill.difficulty}">${skill.difficulty}</span>
                    <span class="skill-category">${skill.category}</span>
                </div>
            </div>
            <div class="skill-progress-info">
                <span class="skill-progress" data-skill-id="${skill.id}">
                    ${skillProgress.completed}/${skillProgress.total} (${skillProgress.percentage}%)
                </span>
                ${isCompleted ? '<span class="completion-badge">🎉</span>' : ''}
            </div>
        </div>
        <p class="skill-description">${skill.description}</p>
        <div class="skill-progress-bar">
            <div class="skill-progress-fill" style="width: ${skillProgress.percentage}%"></div>
        </div>
        <ul class="subtopics-list" role="list">
            ${skill.subtopics.map((subtopic, index) => createSubtopicElement(skill.id, index, subtopic)).join('')}
        </ul>
    `;
    
    return skillCard;
}

function createSubtopicElement(skillId, index, subtopic) {
    const progress = loadProgress();
    const isCompleted = progress[skillId]?.[index] || false;
    const uniqueId = `subtopic-${skillId}-${index}`;
    
    return `
        <li class="subtopic-item ${isCompleted ? 'completed' : ''}">
            <label class="checkbox-wrapper" for="${uniqueId}">
                <input 
                    type="checkbox" 
                    id="${uniqueId}"
                    class="checkbox-input"
                    ${isCompleted ? 'checked' : ''}
                    data-skill-id="${skillId}"
                    data-subtopic-index="${index}"
                    aria-describedby="skill-title-${skillId}"
                >
                <span class="custom-checkbox" aria-hidden="true"></span>
                <span class="subtopic-label">${subtopic}</span>
            </label>
            ${isCompleted ? '<span class="completion-icon">✅</span>' : ''}
        </li>
    `;
}

// Enhanced Event Listeners
document.addEventListener('change', function(event) {
    if (event.target.classList.contains('checkbox-input')) {
        const skillId = parseInt(event.target.dataset.skillId);
        const subtopicIndex = parseInt(event.target.dataset.subtopicIndex);
        const completed = event.target.checked;
        
        updateProgress(skillId, subtopicIndex, completed);
        
        // Add interactive effects
        if (completed) {
            if (soundEnabled) playCompletionSound();
            if (animationsEnabled) addCompletionAnimation(event.target);
            showCompletionMessage(skillId, subtopicIndex);
        }
        
        // Announce progress update to screen readers
        announceProgressUpdate(skillId, subtopicIndex, completed);
        
        // Check for achievements
        checkForNewAchievements();
    }
});

function addCompletionAnimation(checkbox) {
    const wrapper = checkbox.closest('.checkbox-wrapper');
    wrapper.classList.add('completion-pulse');
    
    setTimeout(() => {
        wrapper.classList.remove('completion-pulse');
    }, 1000);
}

function showCompletionMessage(skillId, subtopicIndex) {
    const skill = frontendSkills.find(s => s.id === skillId);
    const subtopic = skill?.subtopics[subtopicIndex];
    
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="message-content">
            <span class="message-icon">🎉</span>
            <span class="message-text">Completed: ${subtopic}</span>
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

function playCompletionSound() {
    // Create a simple beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function addConfettiEffect() {
    if (!animationsEnabled) return;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 4000);
    }
}

function addTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.dataset.tooltip;
    document.body.appendChild(tooltip);
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function addAnimations() {
    if (!animationsEnabled) return;
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + F to focus search
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
            event.preventDefault();
            searchInput.focus();
        }
        
        // Ctrl/Cmd + S to open settings
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            document.querySelector('.settings-section').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Ctrl/Cmd + A to open achievements
        if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
            event.preventDefault();
            document.querySelector('.achievements-section').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function checkForNewAchievements() {
    const progress = loadProgress();
    const totalCompleted = getOverallProgress().completed;
    const unlockedAchievements = loadAchievements();
    
    // Check completion-based achievements
    if (totalCompleted >= 1 && !unlockedAchievements['first-complete']) {
        unlockAchievement('first-complete');
    }
    if (totalCompleted >= 10 && !unlockedAchievements['10-complete']) {
        unlockAchievement('10-complete');
    }
    if (totalCompleted >= 25 && !unlockedAchievements['25-complete']) {
        unlockAchievement('25-complete');
    }
    if (totalCompleted >= 50 && !unlockedAchievements['50-complete']) {
        unlockAchievement('50-complete');
    }
    if (totalCompleted >= 100 && !unlockedAchievements['100-complete']) {
        unlockAchievement('100-complete');
    }
    
    // Check skill mastery
    frontendSkills.forEach(skill => {
        const skillProgress = getSkillProgress(skill.id);
        if (skillProgress.percentage === 100 && !unlockedAchievements['skill-master']) {
            unlockAchievement('skill-master');
        }
    });
    
    // Check perfect score
    if (totalCompleted === getOverallProgress().total && !unlockedAchievements['perfect-score']) {
        unlockAchievement('perfect-score');
    }
}

function unlockAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        saveAchievements();
        renderAchievements();
        
        // Show achievement notification
        showAchievementNotification(achievement);
        
        // Add confetti effect
        addConfettiEffect();
    }
}

function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="achievement-icon">${achievement.icon}</span>
            <div class="notification-text">
                <h4>Achievement Unlocked!</h4>
                <p>${achievement.title}: ${achievement.description}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        loadProgress();
        renderSkills();
        updateProgressDisplay();
        alert('Progress has been reset!');
    }
}

// Local Storage Functions
function saveProgress(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving progress to localStorage:', error);
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Error loading progress from localStorage:', error);
        return {};
    }
}

function saveSettings() {
    try {
        const settings = { soundEnabled, animationsEnabled };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings to localStorage:', error);
    }
}

function loadSettings() {
    try {
        const saved = localStorage.getItem(SETTINGS_KEY);
        if (saved) {
            const settings = JSON.parse(saved);
            soundEnabled = settings.soundEnabled !== undefined ? settings.soundEnabled : true;
            animationsEnabled = settings.animationsEnabled !== undefined ? settings.animationsEnabled : true;
        }
    } catch (error) {
        console.error('Error loading settings from localStorage:', error);
    }
}

function saveAchievements() {
    try {
        const unlockedAchievements = {};
        achievements.forEach(achievement => {
            if (achievement.unlocked) {
                unlockedAchievements[achievement.id] = true;
            }
        });
        localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(unlockedAchievements));
    } catch (error) {
        console.error('Error saving achievements to localStorage:', error);
    }
}

function loadAchievements() {
    try {
        const saved = localStorage.getItem(ACHIEVEMENTS_KEY);
        if (saved) {
            const unlockedAchievements = JSON.parse(saved);
            achievements.forEach(achievement => {
                achievement.unlocked = !!unlockedAchievements[achievement.id];
            });
        }
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Error loading achievements from localStorage:', error);
        return {};
    }
}

// Progress Management
function updateProgress(skillId, subtopicIndex, completed) {
    const progress = loadProgress();
    
    if (!progress[skillId]) {
        progress[skillId] = {};
    }
    
    progress[skillId][subtopicIndex] = completed;
    saveProgress(progress);
    updateProgressDisplay();
}

function getSkillProgress(skillId) {
    const progress = loadProgress();
    const skillProgress = progress[skillId] || {};
    const completedCount = Object.values(skillProgress).filter(Boolean).length;
    const totalCount = frontendSkills.find(skill => skill.id === skillId)?.subtopics.length || 0;
    
    return {
        completed: completedCount,
        total: totalCount,
        percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
    };
}

function getOverallProgress() {
    const progress = loadProgress();
    let totalCompleted = 0;
    let totalSubtopics = 0;
    
    frontendSkills.forEach(skill => {
        const skillProgress = progress[skill.id] || {};
        totalCompleted += Object.values(skillProgress).filter(Boolean).length;
        totalSubtopics += skill.subtopics.length;
    });
    
    return {
        completed: totalCompleted,
        total: totalSubtopics,
        percentage: totalSubtopics > 0 ? Math.round((totalCompleted / totalSubtopics) * 100) : 0
    };
}

function updateProgressDisplay() {
    const overallProgress = getOverallProgress();
    
    completedCountElement.textContent = overallProgress.completed;
    totalCountElement.textContent = overallProgress.total;
    progressPercentageElement.textContent = `${overallProgress.percentage}%`;
    progressFillElement.style.width = `${overallProgress.percentage}%`;
    
    // Update individual skill progress
    document.querySelectorAll('.skill-progress').forEach(element => {
        const skillId = parseInt(element.dataset.skillId);
        const skillProgress = getSkillProgress(skillId);
        element.textContent = `${skillProgress.completed}/${skillProgress.total} (${skillProgress.percentage}%)`;
    });
}

// Rendering Functions
function renderSkills() {
    skillsContainer.innerHTML = '';
    
    frontendSkills.forEach(skill => {
        const skillElement = createSkillElement(skill);
        skillsContainer.appendChild(skillElement);
    });
}

// Accessibility Functions
function announceProgressUpdate(skillId, subtopicIndex, completed) {
    const skill = frontendSkills.find(s => s.id === skillId);
    const subtopic = skill?.subtopics[subtopicIndex];
    const action = completed ? 'completed' : 'unchecked';
    
    // Create a live region for announcements
    let liveRegion = document.getElementById('live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = `${subtopic} ${action}. ${getSkillProgress(skillId).completed} of ${getSkillProgress(skillId).total} subtopics completed for ${skill?.title}.`;
}

function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#skills-heading';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Export/Import Progress Functions
function exportProgress() {
    const progress = loadProgress();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'frontend-skills-progress.json';
    link.click();
}

function importProgress() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = function(e) {
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const progress = JSON.parse(e.target.result);
                    saveProgress(progress);
                    loadProgress();
                    renderSkills();
                    updateProgressDisplay();
                    alert('Progress imported successfully!');
                } catch (error) {
                    alert('Error importing progress. Please check the file format.');
                }
            };
            reader.readAsText(e.target.files[0]);
        }
    };
    fileInput.click();
}

// Add button styles
const buttonStyles = `
    .btn {
        padding: var(--spacing-3) var(--spacing-6);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        background: var(--surface-color);
        color: var(--text-primary);
        font-size: var(--font-size-sm);
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    
    .btn:hover {
        background: var(--background-color);
        border-color: var(--primary-color);
    }
    
    .btn:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .btn-secondary {
        background: var(--background-color);
    }
`;

// Add styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = buttonStyles;
document.head.appendChild(styleSheet);

// Service Worker for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
