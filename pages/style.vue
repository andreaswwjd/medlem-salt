<template>
  <div>
    <div class="columns">
      <div class="column is-1">
        <nav class="navbar is-centered">
          <div class="navbar-start">
            <span class="navbar-item">
              Salt
            </span>
          </div>
          <div class="navbar-center is-centered" style="flex-grow: 1;">
            <div class="navbar-item">Projekt</div>
            <div class="navbar-item is-active">Köp</div>
            <div class="navbar-item">Om mig</div>
            <div class="navbar-item">Kontakt</div>
          </div>
          <div class="navbar-end">
            <span class="navbar-item">
              <i class="fas fa-cog"></i> Settings
            </span>
          </div>

        </nav>
      </div>
      <div class="column container" style="background-color: #FAFAFA">
        <header>
            <div id="header-menu">
            </div>
            <div id="☰" class="korg">
                <span id="korg_nr">2</span>
                <img id="menu_2" src="/svg/menu_2.svg" alt="">
                <img id="menu_1" src="/svg/menu_1.svg" alt="">
            </div> 
        </header>
        <div class="content block shadow round-s">
            
            <br>
            <br>
            <br>
            <h1>Typografi</h1>
            <hr>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <h4 class="underline">Heading 4</h4>
            <p>Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            <blockquote>
                <p>A well placed quote guides a reader through a story, helping them to understand the most important points being made</p>
            </blockquote>
            <p><strong>cons ectetuer adipiscing elit</strong></p>
            <p><s>cons ectetuer adipiscing elit</s></p>
            <p><mark>cons ectetuer adipiscing elit</mark></p>
            <blockquote>Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</blockquote>
            <p><a href="#">Lorem ipsum dolor sit amet</a></p>
            <p>The quick brown fox<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> jumped over the lazy dog<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <pre>
                <code>
        .my-link {
            text-decoration: underline;
        }       </code>
            </pre>
            <ol class="footnotes-list">
                <li id="fn1" class="footnote-item">
                    <p>Foxes are red <a href="#fnref1" class="footnote-backref">↩︎</a></p>
                </li>
            </ol>

            <br>
            <br>
            <br>
            <h1>Elements</h1>
            <hr>
            
            <img src="https://via.placeholder.com/1050x824.png" alt="placeholdit.imgix.net">
            <div class="feed-container">
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 0.618); flex-grow: calc(2 * 0.618); background-image: url(https://via.placeholder.com/1050x824.png)"></div>
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 1); flex-grow: calc(2 * 1); background-image: url(https://via.placeholder.com/824x1050.png)"></div>
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 1.618); flex-grow: calc(2 * 1.618); background-image: url(https://via.placeholder.com/1050x824.png)"></div>
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 2); flex-grow: calc(2 * 2); background-image: url(https://via.placeholder.com/824x1050.png)"></div>
                <div class="feed-item img featured" style="order: 1; flex-basis: calc(125px * 824 / 1050); flex-grow: calc(824 / 1050); background-image: url(https://via.placeholder.com/824x1050.png)"></div>
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 1050 / 824); flex-grow: calc(1050 / 824); background-image: url(https://via.placeholder.com/1050x824.png)"></div>
                <div class="feed-item img" style="order: 1; flex-basis: calc(125px * 1648 / 824); flex-grow: calc(1648 / 824); background-image: url(https://via.placeholder.com/1648x824.png)"></div>
                <div class="feed-item img" style="order: 2; flex-basis: calc(125px * 800 / 824);  flex-grow: calc(800 / 824); background-image: url(https://via.placeholder.com/800x824.png)"></div>
                <div class="feed-item img" style="order: 3; flex-basis: calc(125px * 600 / 824);  flex-grow: calc(600 / 824); background-image: url(https://via.placeholder.com/600x824.png)"></div>
                <div class="feed-item img" style="order: 4; flex-basis: calc(125px * 600 / 824);  flex-grow: calc(600 / 824); background-image: url(https://via.placeholder.com/600x824.png)"></div>
                <div class="feed-item img" style="order: 5; flex-basis: calc(125px * 600 / 824);  flex-grow: calc(600 / 824); background-image: url(https://via.placeholder.com/600x824.png)"></div>
                <div class="feed-item img" style="order: NaN; flex-basis: calc(125px * 980 / 824);  flex-grow: calc(980 / 824); background-image: url(https://via.placeholder.com/980x824.png)"></div>
                <div class="feed-item img" style="order: 7; flex-basis: calc(125px * 1500 / 824); flex-grow: calc(1500 / 824); background-image: url(https://via.placeholder.com/1500x824.png)"></div>
            </div>


            <div class="main-menu">
                <a class="link current" href="#"><h1>Menyval 1</h1></a><br>
                <a class="link" href="#"><h1>Menyval 2</h1></a><br>
                <a class="link" href="#"><h1>Menyval 3</h1></a><br>
                <a class="link" href="#"><h1>Menyval 4</h1></a><br>
                <a class="link" href="#"><h1>Menyval 5</h1></a><br>
                <a class="link" href="#"><h1>Menyval 6</h1></a><br>
                <a class="link" href="#"><h1>Menyval 7</h1></a><br>
                <a class="link" href="#"><h1>Menyval 8</h1></a><br>
            </div> 


            <button> Köp </button><br>
            <button class="hover-blob-animation"> Köp </button><br>
            <button class="text-appear-animation"> <span class="price">335 kr</span><span>Köp</span> </button><br>
            <button class="text-appear-animation hover-blob-animation"> <span class="price">335 kr</span><span>Köp</span> </button><br>
            <button class="primary"> Primär </button><br>
            <button disabled> Disabled </button><br>
            <button class="cta shadow"> Betala </button><br>
            
            <label for="input">Input label</label>
            <input name="input" type="text" placeholder=""><br>
            <label class="active" for="input">Input label active</label>
            <input name="input" type="text" placeholder="Input"><br>
            <label class="textarea-label" for="textarea">Textarea label</label>
            <textarea name="textarea" rows="10" placeholder=""></textarea><br>

            <h3>Korg</h3>
            <table>
                <tbody>
                    <tr>
                        <th><h6>Antal</h6></th>
                        <th><h6>Produkt</h6></th>
                        <th><h6>Kostnad</h6></th>
                    </tr>
                    <tr>
                        <td>1 st</td>
                        <td><a href="#">Title</a></td>
                        <td>123 kr</td>
                        <td>&times;</td>
                    </tr>
                    <tr>
                        <td>1 st</td>
                        <td><a href="#">Artikel nummer två</a></td>
                        <td>1 234 kr</td>
                        <td>&times;</td>
                    </tr>
                    <tr class="spacing"></tr>
                    <tr>
                        <td></td>
                        <td>Frakt</td>
                        <td>75 kr</td>
                    </tr>
                    <tr>
                        <td><h6>Totalt</h6></td>
                        <td></td>
                        <td>1 357 kr<sub>varav moms 339 kr</sub></td>
                    </tr>
                    <tr class="spacing"></tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="button">
                            <button class="text-appear-animation hover-blob-animation"> 
                                <span>Betala</span>
                                <span class="price">1 357 kr</span> 
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <br>
            <br>
            <br>
            <h1>Colors</h1>
            <hr>
            
            <div class="pallette-main">
                <div class="color-circle bg-color1">Color 1</div>
                <div class="color-circle bg-color2">Color 2</div>
                <div class="color-circle bg-color3">Color 3</div>
                <div class="color-circle bg-color4">Color 4</div>
            </div>
            <div class="pallette-alt">
                <div class="color-square bg-color1-dark"></div>
                <div class="color-square bg-color1 "></div>
                <div class="color-square bg-color1-light"></div>
                <div class="color-square bg-color2-dark"></div>
                <div class="color-square bg-color2"></div>
                <div class="color-square bg-color2-light"></div>
                <div class="color-square bg-color3-dark"></div>
                <div class="color-square bg-color3"></div>
                <div class="color-square bg-color3-light"></div>
                <div class="color-square bg-color4-dark"></div>
                <div class="color-square bg-color4"></div>
                <div class="color-square bg-color4-light"></div>
            </div>

            <br>
            <br>
            <br>
            <h1>Grafic Elements</h1>
            <hr>
        
            <br>
            <br>
            <br>
            <h1>Motions</h1>
            <hr>
            <div class="active">
                <h4 class="slide-in delay-1">Animated title</h4>
                <h4 class="slide-in delay-2">Animated title</h4>
                <h4 class="slide-in delay-3">Animated title</h4>
                <h4 class="slide-in delay-4">Animated title</h4>
                <h4 class="slide-in delay-5">Animated title</h4>
                <h4 class="slide-in delay-6">Animated title</h4>
                <h4 class="slide-in delay-7">Animated title</h4>
                <h4 class="slide-in delay-8">Animated title</h4>
            </div>
            
            <div style="height: 40vh;"></div>
            <div id="loader">
                <img class="inri" src="/svg/logo.svg" alt="">
                <div class="portrait"></div>
            </div>
            <script>
            setTimeout(function () {
                document.getElementById('loader').classList.add('loaded')
            }, 100)
        </script>
        </div>

        <div class="item-container">
            <img class="feature_image" src="https://via.placeholder.com/1050x824.png" alt="">
            <div class="files">
                <div class="file img current" style="background-image: url(https://via.placeholder.com/?txtsize=69&txt=600%C3%97824&w=600&h=824)"></div>
                <div class="file img" style="background-image: url(https://via.placeholder.com/?txtsize=69&txt=600%C3%97824&w=600&h=824)"></div>
                <!-- <div class="file img" style="background-image: url(https://via.placeholder.com/?txtsize=69&txt=980%C3%97824&w=980&h=824)"></div> -->
                <!-- <div class="file img" style="background-image: url(https://via.placeholder.com/?txtsize=69&txt=1500%C3%97824&w=1500&h=824)"></div> -->
            </div>
            <div class="meta">
                <div class="pay_btn">
                    <h4>2018-04-15</h4>
                    <button class="text-appear-animation hover-blob-animation"> <span class="price">335 kr</span><span>Köp</span> </button><br>
                </div>
                <div class="description">
                    <h4 class="underline">Title</h4>
                    <p>Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                </div>
            </div>
        </div>
      </div>
      <div class="column">
        
      </div>
    </div>
    
  </div>
</template>
<style lang="scss">
// @import '~assets/style/style.scss';

nav.navbar {
  height: 100vh;
  flex-direction: column;
  // background-color: $white-bis;
}
</style>