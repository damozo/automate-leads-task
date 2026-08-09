import { test, expect } from '@playwright/test';

test('card_creation', async ({ page }) => {
    const baseURL: string = 'https://develop-hqzen.cxrole.com/';
    const prodURL: string = 'https://hqzen.com/';
    const username: string = 'donna';
    const password: string = 'donna@hqzen0';
    const milestone_name: string = 'Automate Leads Tasks';
    const card_title: string = 'B card maker'
    const milestone_lead_1 = 'Clelia Cyra Jaye Molanda';
    const milestone_lead_2 = 'Gladys Faith Veloso';
    const card_assignee_1 = 'Alexander Manuel Huelar';
    const workforce_name = 'BPOSeats';
    await page.goto(baseURL);

    // Login
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Enter email or username' }).fill(username);
    await page.getByRole('textbox', { name: 'Enter password' }).fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Navigate to the Workforce
    await page.getByRole('button', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'Channel Info Tech' }).click();
    await page.getByRole('button', { name: 'BP', exact: true }).click();

    // // Navigate to the Milestones page 
    // await expect(page.getByRole('link', { name: '󰈽 Milestones' })).toBeVisible();
    // await page.getByRole('link', { name: '󰈽 Milestones' }).click();

    // // Create a new milestone
    // await page.getByRole('button', { name: '󰐕 Create Milestone' }).click();
    // await page.locator('.textarea').first().fill(milestone_name);
    // await page.getByRole('button', { name: 'Add me as lead' }).click();
    // await page.getByRole('button', { name: '󰐕 Add leads' }).click();
    // await page.getByRole('textbox', { name: 'Search partner' }).click();

    // await page.getByRole('textbox', { name: 'Search partner' }).fill(milestone_lead_1);
    // const leadOption = page.getByRole('listitem').filter({ hasText: milestone_lead_1 });
    // await expect(leadOption).toBeVisible();
    // await leadOption.click();

    // await page.getByRole('textbox', { name: 'Search partner' }).fill(milestone_lead_2);
    // const leadOption2 = page.getByRole('listitem').filter({ hasText: milestone_lead_2 });
    // await expect(leadOption2).toBeVisible();
    // await leadOption2.click();

    // await page.getByRole('button', { name: 'Done' }).click();
    // await page.pause()
    // await page.getByRole('button', { name: 'Create', exact: true }).click();

    //  // Wait for the create-milestone modal to fully close before proceeding
    // await expect(page.getByRole('textbox', { name: 'Search leads' })).toBeHidden();

//     // Search for the specific milestone
//     const milestoneLink = page.getByRole('link').filter({
//         has: page.getByText(milestone_name, { exact: true })
//         });
//     await expect(milestoneLink).toBeVisible();
//     await milestoneLink.click();

//     // Create a new card and verify its creation
//     await page.getByText('Cards', { exact: true }).click();
//     await page.getByRole('button', { name: '󰐕 New card' }).click();
//     await page.getByRole('button', { name: 'Select a board 󰅀' }).click();
//     await page.getByRole('listitem').filter({ hasText: 'Quality Assurance' }).click();
//     await page.getByRole('textbox', { name: 'Enter card title' }).click();
//     await page.getByRole('textbox', { name: 'Enter card title' }).pressSequentially(card_title, { delay: 50 });
//     // await page.locator('.textarea').first().pressSequentially(milestone_name, { delay: 50 });
//     await expect(page.getByRole('button', { name: 'Create' })).toBeEnabled();
//     await page.getByRole('button', { name: 'Create' }).click();
//     await page.pause();
//     await page.getByRole('button', { name: 'View', exact: true }).click();
// //   await page.getByRole('button', { name: '󰯨 Assign this card with AI' }).click();
// //   await page.getByRole('button', { name: '󰅁 Back', exact: true }).click();
//     await page.getByText('Members').click();
//     await page.locator('.add').click();
//     await page.getByText('Software QA').click();
//     await page.getByRole('textbox', { name: 'Search partner' }).fill(card_assignee_1);
//     await page.pause();
//     await page.locator('div').filter({ hasText: card_assignee_1 }).first().click();
//     await page.getByRole('button', { name: 'Done', exact: true }).click();

    // Navigate to Quality Assurance board and move cards to target columns
    await page.getByRole('link', { name: '󰛇 Assigned 󰅂' }).click();
    await page.getByRole('link', { name: '󰤱 Quality Assurance 󰆂' }).click();
    await page.getByRole('textbox', { name: 'Search card' }).fill(card_title);
    
    // // await page.locator('.iconic.rounded.secondary.transparent').click();
    // // await page.getByText('Move').click();
    // // await page.getByRole('button', { name: 'Select column 󰅀' }).click();
    // // await page.locator('div').filter({ hasText: /^Done$/ }).click();
    // // await page.getByRole('button', { name: 'Next' }).click();
    // // await page.getByRole('button', { name: 'Move card' }).click();
    // // await expect(page.getByText('Finished on')).toBeVisible();
    // await expect(page.getByText(card_title).first()).toBeVisible();\
  
//   await page.getByText('Details').click();
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).fill('');
//   await page.getByRole('textbox', { name: 'Search card' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).fill('Card Maker 1');
//   await expect(page.getByText('Card Maker')).toBeVisible();
//   await page.locator('div').filter({ hasText: /^Quality Assurance$/ }).click();
//   await page.getByRole('button', { name: 'View' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.locator('.rounded.iconic.tertiary').first().click();
//   const page1 = await page1Promise;
//   await page.getByRole('link', { name: '󰛇 Assigned 󰅂' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).fill('Card Maker 1');
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
//   await page.getByRole('textbox', { name: 'Search card' }).click();
//   await page.getByRole('textbox', { name: 'Search board name or card ID' }).click();
//   await page.getByRole('textbox', { name: 'Search board name or card ID' }).fill('quality assurance');
//   await expect(page.getByRole('link', { name: '󰤱 󰛇 Quality Assurance 󰆂' })).toBeVisible();
//   await page.getByRole('link', { name: '󰤱 󰛇 Quality Assurance 󰆂' }).click();
//   await expect(page.getByRole('textbox', { name: 'Search card' })).toBeVisible();
//   await page.getByRole('textbox', { name: 'Search card' }).click();
//   await page.getByRole('textbox', { name: 'Search card' }).fill('Card Maker 1');
//   await page.goto('https://staging-hqzen.cxrole.com/company/10/workforce/49/board/126?card_id=557986');
//   await expect(page.getByText('Tag Suggested tags Card Maker')).toBeVisible();
//   await page.locator('.iconic.rounded.secondary.transparent').click();
//   await page.getByRole('listitem').filter({ hasText: 'Move' }).click();
//   await page.getByRole('button', { name: 'Select column 󰅀' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Done' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Move card' }).click();
//   await page.locator('.iconic.rounded.secondary.transparent').click();
//   await page.getByRole('listitem').filter({ hasText: 'Move' }).click();
//   await page.getByRole('button', { name: 'Select column 󰅀' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Doing' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Move card' }).click();
//   await expect(page.locator('header').filter({ hasText: /^Doing11 card$/ })).toBeVisible();
//   await expect(page.getByText('/11/1 completed subtasks').first()).toBeVisible();
});