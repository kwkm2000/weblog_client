import { test, expect } from "@playwright/test";

// 各テストを実行する前に http://localhost:3000 に遷移する
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("MIZUIRO LABのロゴが表示されている", async ({ page }) => {
  await expect(page.getByText("MIZUIRO LAB")).toBeVisible();
});

test("記事リストが表示されている", async ({ page }) => {
  const articles = page.getByTestId("article-list");
  expect(articles).toBeTruthy();
});

test("表示されるリストの要素が正しい", async ({ page }) => {
  // APIから記事のデータを取得
  const response = await fetch("http://api.mizuiro-lab.tokyo/articles");
  const articles = await response.json();
  const firstArticle = articles[0];
  const articleTitle = page.getByTestId("article-title");
  const articleLink = page.getByTestId("article-link");

  await expect(articleTitle).toHaveText(firstArticle.title);
  await expect(articleLink).toHaveAttribute(
    "href",
    `/article/${firstArticle.id}/`
  );
});
