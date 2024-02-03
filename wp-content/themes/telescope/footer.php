</main>

<footer id="footer" class="footer">
  <div class="footer__logo">
    <?php
    if (function_exists('the_custom_logo')) {
      the_custom_logo();
    }
    ?>
  </div>
  <div class="footer__links">
    <div class="container-links">
      <?= get_template_part(
        'template-parts/navigations/footer',
        'nav',
        array(
          'nav-type' => 'footer-1',
        )
      )
      ?>
    </div>
    <div class="container-links">
      <?= get_template_part(
        'template-parts/navigations/footer',
        'nav',
        array(
          'nav-type' => 'footer-2',
        )
      )
      ?>
    </div>
    <div class="container-links">
      <?= get_template_part(
        'template-parts/navigations/footer',
        'nav',
        array(
          'nav-type' => 'footer-3',
        )
      )
      ?>
    </div>
    <div class="container-links container-links--social">
      <?= get_template_part(
        'template-parts/navigations/footer',
        'nav',
        array(
          'nav-type' => 'footer-4',
        )
      )
      ?>
    </div>
  </div>
</footer>

<!-- </div> -->


<?php wp_footer(); ?>
</body>

</html>