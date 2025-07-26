document.addEventListener("DOMContentLoaded", () => {
  // アーカイブのパンくずリスト管理
  const breadcrumbNav = document.querySelector('.archive-breadcrumb');
  
  function updateBreadcrumb(path = []) {
    if (!breadcrumbNav) return;
    
    let breadcrumbHTML = '<span class="breadcrumb-item active" data-level="all">すべて</span>';
    
    if (path.length > 0) {
      breadcrumbHTML = '<span class="breadcrumb-item" data-level="all">すべて</span>';
      
      path.forEach((item, index) => {
        breadcrumbHTML += '<span class="breadcrumb-separator">▸</span>';
        const isActive = index === path.length - 1;
        const className = isActive ? 'breadcrumb-item active' : 'breadcrumb-item';
        breadcrumbHTML += `<span class="${className}" data-level="${item.level}" data-value="${item.value}">${item.label}</span>`;
      });
    }
    
    breadcrumbNav.innerHTML = breadcrumbHTML;
    
    // パンくずリストのクリックイベント
    breadcrumbNav.querySelectorAll('.breadcrumb-item:not(.active)').forEach(item => {
      item.addEventListener('click', () => {
        const level = item.dataset.level;
        if (level === 'all') {
          updateBreadcrumb([]);
          // すべてのアーカイブを閉じる
          document.querySelectorAll('.archive-months, .archive-posts').forEach(el => {
            el.style.display = 'none';
          });
        }
      });
    });
  }

  // アーカイブ年のトグル
  document.querySelectorAll('.archive-year-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const target = document.getElementById(toggle.dataset.target);
      const year = toggle.dataset.year;
      const arrow = toggle.querySelector('.toggle-arrow');
      
      if (target.style.display === 'none' || target.style.display === '') {
        // 開く
        target.style.display = 'block';
        arrow.textContent = '▼';
        arrow.classList.remove('closed');
        arrow.classList.add('open');
        
        // パンくずリスト更新
        updateBreadcrumb([{level: 'year', value: year, label: year + '年'}]);
      } else {
        // 閉じる
        target.style.display = 'none';
        arrow.textContent = '▽';
        arrow.classList.remove('open');
        arrow.classList.add('closed');
        
        // パンくずリスト更新
        updateBreadcrumb([]);
      }
    });
  });

  // アーカイブ月のトグル
  document.querySelectorAll('.archive-month-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const target = document.getElementById(toggle.dataset.target);
      const year = toggle.dataset.year;
      const month = toggle.dataset.month;
      const arrow = toggle.querySelector('.toggle-arrow');
      
      if (target.style.display === 'none' || target.style.display === '') {
        // 開く
        target.style.display = 'block';
        arrow.textContent = '▼';
        arrow.classList.remove('closed');
        arrow.classList.add('open');
        
        // パンくずリスト更新
        updateBreadcrumb([
          {level: 'year', value: year, label: year + '年'},
          {level: 'month', value: month, label: month + '月'}
        ]);
      } else {
        // 閉じる
        target.style.display = 'none';
        arrow.textContent = '▽';
        arrow.classList.remove('open');
        arrow.classList.add('closed');
        
        // パンくずリスト更新
        updateBreadcrumb([{level: 'year', value: year, label: year + '年'}]);
      }
    });
  });

  // 初期状態でパンくずリストを設定
  updateBreadcrumb([]);
});
