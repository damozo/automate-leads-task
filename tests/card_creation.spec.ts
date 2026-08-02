import { test, expect } from '@playwright/test';

test('card_creation', async ({ page }) => {
    const baseURL: string = 'https://staging-hqzen.cxrole.com/';
    const prodURL: string = 'https://hqzen.com/';
    const username: string = 'donna';
    const password: string = 'bposeats';
    const milestone_name: string = 'Automation Team | H Sprint 2026';
    const card_title: string = '[W2 (H Sprint) - Automation Team Task]: Read and Respond to Forge';

    await page.goto(baseURL);

    // Login
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Enter email or username' }).fill(username);
    await page.getByRole('textbox', { name: 'Enter password' }).fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Navigate to the Workforce
    await page.getByRole('button', { name: '󰮧 Home 󰅀' }).click();
    await page.getByRole('link', { name: 'Channel Info Tech' }).click();
    await page.getByRole('button', { name: 'BP' }).click();

    // // Navigate to the Milestones page and search for the specific milestone
    // await page.getByRole('link', { name: '󰈽 Milestones' }).click();
    // await page.getByRole('textbox', { name: 'Search' }).fill(milestone_name);
    // await expect(page.getByRole('link', { name: '󰈽 ' + milestone_name })).toBeVisible();
    // await page.getByRole('link', { name: '󰈽 ' + milestone_name }).click();

    // // Create a new card and verify its creation
    // await page.getByRole('button', { name: '󰐕 New card' }).click();
    // await page.getByRole('button', { name: 'Select a board 󰅀' }).click();
    // await page.getByRole('listitem').filter({ hasText: 'Quality Assurance' }).click();
    // await page.getByRole('textbox', { name: 'Enter card title' }).fill(card_title);
    // await page.getByRole('button', { name: 'Create' }).click();

    // Navigate to Quality Assurance board and move cards to target columns
    await page.getByRole('link', { name: '󰛇 Assigned 󰅂' }).click();
    await page.getByRole('link', { name: '󰤱 Quality Assurance 󰆂' }).click();
    // await page.getByRole('textbox', { name: 'Search card' }).click();

    await page.getByRole('textbox', { name: 'Search card' }).fill(card_title);
    
    // await page.locator('.iconic.rounded.secondary.transparent').click();
    // await page.getByText('Move').click();
    // await page.getByRole('button', { name: 'Select column 󰅀' }).click();
    // await page.locator('div').filter({ hasText: /^Done$/ }).click();
    // await page.getByRole('button', { name: 'Next' }).click();
    // await page.getByRole('button', { name: 'Move card' }).click();
    // await expect(page.getByText('Finished on')).toBeVisible();
    await expect(page.getByText(card_title).first()).toBeVisible();
});