import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `<header class="lg-navbar" role="banner">
      <div class="lg-navbar__inner">
        <a class="lg-navbar__brand" href="/" aria-label="Lowgular Home">
          <!-- If you can inline your SVG, you can recolor it via CSS -->
          <!-- Paste your SVG inside the next span and give it class="lg-logo" -->
          <span class="lg-logo" aria-hidden="true">
            <!-- LOWGULAR LOGO SVG HERE -->
            <!-- or fallback: -->
            <img src="assets/images/lowgular-logo.svg" alt="" />
          </span>
          <span class="lg-wordmark">LOWGULAR</span>
        </a>

        <div class="lg-navbar__spacer"></div>

        <details class="lg-user" role="listbox">
          <summary
            class="lg-user__summary"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <!-- Use an <img> if you have avatars -->
            <!-- <img class="lg-avatar" src="assets/avatars/me.jpg" alt="Open user menu" /> -->
            <span class="lg-avatar" aria-hidden="true">G</span>
            <span class="sr-only">Open user menu</span>
          </summary>
          <ul class="lg-user__menu" role="menu">
            <li role="none">
              <a role="menuitem" href="/profile">Profile &amp; Stats</a>
            </li>
            <li role="none">
              <button role="menuitem" type="button" id="logout-btn">
                Log out
              </button>
            </li>
          </ul>
        </details>
      </div>
    </header>
    <main class="wrap">
      <div class="content"><router-outlet></router-outlet></div>
    </main>`,
  standalone: true,
  imports: [RouterOutlet],
})
export class CourseWrapperPage {}
