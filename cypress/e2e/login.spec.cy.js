describe('Rakuten Rebates ログイン機能テスト', () => {
  
  it('ユーザーが正常にログインできることを確認する', () => {
    
    // ステップ 1: Rakuten Rebatesのホームページにアクセス
    cy.visit('https://www.rebates.jp/');
    
    // ステップ 2: [サインイン] ボタンをクリック
    cy.get('.css-1j4l5jp').click();  // [サインイ] ボタンのセレクター

    // ステップ 3: 楽天アカウントのログインページに遷移し、ユーザーIDとパスワードを入力
    cy.origin('https://login.account.rakuten.com', () => {
      
      // ユーザーIDを入力して[次へ]ボタンをクリック
      cy.get('#user_id').type('assignmentresult96@gmail.com');
      cy.get('#cta001').click();  // [次へ]ボタンのセレクター

      // パスワードを入力して[次へ]ボタンをクリック
      cy.get('#password_current').type('Asdfghjkl1-');
      cy.get('#cta011').click();  // [次] ボタンのセレクター

    });

    // ステップ 4: 正常にログインした後、ホームページにリダイレクトされていることを確認
    cy.url().should('include', 'https://www.rebates.jp/');  // ログイン後、ユーザーがホームページにいることを確認
  
  });

});

//CI パイプラインが動作しているかどうかを確認する