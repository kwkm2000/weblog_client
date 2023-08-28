import { test, expect } from "@playwright/test";

// 各テストを実行する前に http://localhost:3000 に遷移する
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("MIZUIRO LABのロゴが表示されている", async ({ page }) => {
  await expect(page.getByText("MIZUIRO LAB")).toBeVisible();
});
