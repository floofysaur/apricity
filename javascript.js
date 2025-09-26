(() => {

    const tabs = {
        $button: document.querySelectorAll('.tab-menu__button'),
        $recipe: document.querySelectorAll('.tab-recipe'),

        init(){
            for (let i = 0; i < this.$button.length; i++){
                let button = this.$button[i];
                let recipe = this.$recipe[i];

                button.addEventListener('click', () => {
                    // Remove active class from currently active button and content
                    document.querySelector('.tab-menu__button.is-active').classList.remove('is-active');
                    document.querySelector('.tab-recipe.is-active').classList.remove('is-active');

                    // Add active class to clicked button and corresponding content
                    button.classList.add('is-active');
                    recipe.classList.add('is-active');
                } );
            }
        }
    }

    tabs.init();

})();