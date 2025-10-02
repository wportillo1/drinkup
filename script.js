/* ---------- Data (menu items + reusable option snippets) ---------- */ 

const milkTeas = [ 
    "Original", 
    "Jasmine Green", 
    "Oolong", 
    "Rose Oolong", 
    "White Peach Oolong", 
    "Sakura Oolong", 
    "Taro", 
    "Matcha" 
]; 
const coffees = [ 
    "Latte", 
    "Cappuccino", 
    "Mocha", 
    "Espresso Macchiato", 
    "Caramel Macchiato" 
]; 
const teas = [
    "Black", 
    "Green", 
    "Hibiscus"
]; 
const refreshers = [ 
    "Strawberry Hibiscus", 
    "Dragonfruit Passionfruit", 
    "Pomegranate Blackberry Mango", 
    "Blueberry" 
]; 

/* Option snippets generator functions */ 
function sizeHTML(namePrefix) {
    return ` 
        <label>Size: <span style="color:#ff6b6b">*</span> 
            <select name="${namePrefix}-size" data-size="true" required> 
                <option value="">-- Select Size --</option> 
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option> 
            </select> 
        </label> 
    `; 
} 

function coldFoamHTML(namePrefix) { 
    return ` 
        <button type="button" class="collapsible">Cold Foam</button> 
        <div class="content"><div class="content-inner"> 
            <select name="${namePrefix}-coldfoam"> 
                <option>None</option> 
                <option>Vanilla</option> 
                <option>Matcha</option> 
                <option>Brown Sugar</option> 
                <option>Chocolate</option> 
                <option>Raspberry</option> 
                <option>Salted Caramel</option>
                <option>Strawberry</option> 
            </select> 
        </div></div> 
    `; 
} 

function toppingsHTML(namePrefix) { 
    return ` 
        <button type="button" class="collapsible">Toppings</button> 
        <div class="content"><div class="content-inner"> 
            <fieldset> 
                <legend>Pick toppings</legend> 
                <div class="checkbox-grid"> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="chocolate"> Chocolate Drizzle</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="caramel"> Caramel Drizzle</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="white-chocolate"> White Chocolate Drizzle</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="whipped-cream"> Whipped Cream</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="tapioca"> Tapioca Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="mango"> Mango Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="peach"> Peach Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="lychee"> Lychee Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="strawberry"> Strawberry Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="passionfruit"> Passionfruit Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="kiwi"> Kiwi Boba</label> 
                <label><input type="checkbox" name="${namePrefix}-topping" value="blueberry"> Blueberry Boba</label> 
            </div> 
        </fieldset>
    </div></div> 
`; 
} 

function sweetnessHTML(namePrefix) {
    return ` 
        <button type="button" class="collapsible">Sweetness</button> 
        <div class="content"><div class="content-inner"> 
            <select name="${namePrefix}-sweetness"> 
                <option>100%</option>
                <option>75%</option>
                <option>50%</option
                ><option>25%</option>
                <option>0%</option>
            </select> 
        </div></div> 
    `; 
} 

function iceHTML(namePrefix) { 
    return ` 
        <button type="button" class="collapsible">Ice</button> 
        <div class="content"><div class="content-inner"> 
            <select name="${namePrefix}-ice"> 
                <option>Regular Ice</option> 
                <option>No Ice</option> 
                <option>Light Ice</option> 
                <option>Extra Ice</option> 
            </select>
        </div></div> 
    `; 
} 

function milkHTML(namePrefix) { 
    return ` 
        <button type="button" class="collapsible">Milk</button> 
        <div class="content"><div class="content-inner"> 
            <select name="${namePrefix}-milk"> 
                <option>2%</option>
                <option>Whole</option>
                <option>Nonfat</option>
                <option>Almond</option>
                <option>Coconut</option>
                <option>Oatmilk</option>
                <option>Soy</option>
                <option>Heavy Cream</option> 
            </select> 
        </div></div> 
    `; 
} 
function espressoHTML(namePrefix) { 
    return ` 
        <button type="button" class="collapsible">Espresso Options</button>
        <div class="content"><div class="content-inner"> 
            <select name="${namePrefix}-espresso"> 
                <option>Signature Espresso</option> 
                <option>Blonde Espresso</option> 
                <option>Decaf</option> 
                <option>1/2 Decaf</option>
                <option>1/3 Decaf</option> 
                <option>2/3 Decaf</option> 
            </select> 
        </div></div> 
    `; 
} 

/* ---------- Render menus ---------- */ 
function slugify(name) { 
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g,"");
} 
/* Build a generic customization panel for an item with a set of option names */ 
function buildItemHTML(name, options = []) { 
    const id = slugify(name); 
    // include a quantity input and Add to Cart button 
    let html = ` 
        <button class="drink-option" type="button" onclick="toggleCustomization('${id}')">${name}</button> 
        <div id="${id}-customization" class="customization" data-item="${name}"> 
        <label>Quantity: 
            <input type="number" name="${id}-qty" min="1" value="1"> 
        </label> 
    `;
    // if options array contains 'size', we add sizeHTML 
    if (options.includes("size")) html += sizeHTML(id); 
    // add collapsible sections depending on options 
    if (options.includes("coldfoam")) html += coldFoamHTML(id); 
    if (options.includes("toppings")) html += toppingsHTML(id); 
    if (options.includes("sweetness")) html += sweetnessHTML(id); 
    if (options.includes("ice")) html += iceHTML(id); 
    if (options.includes("milk")) html += milkHTML(id); 
    if (options.includes("espresso")) html += espressoHTML(id); 
    
    html += ` 
        <button class="add-cart" type="button" onclick="addToCart('${id}')">Add to Cart</button> 
        </div> 
        `; 
        return html; 
    } 
    
    /* Populate categories */ 
    const milkContainer = document.getElementById("milk-bubble-tea"); 
    milkTeas.forEach(name => {
        milkContainer.insertAdjacentHTML("beforeend", buildItemHTML(name, ["size","coldfoam","toppings","sweetness","ice"])); 
    }); 
    const coffeeContainer = document.getElementById("coffee"); 
    coffees.forEach(name => { 
        coffeeContainer.insertAdjacentHTML("beforeend", buildItemHTML(name, ["size","espresso","milk","coldfoam","toppings","sweetness","ice"])); 
    }); 
    const teaContainer = document.getElementById("tea"); 
    teas.forEach(name => { 
        teaContainer.insertAdjacentHTML("beforeend", buildItemHTML(name, ["size","coldfoam","toppings","sweetness","ice"])); 
    }); 
    const refreshersContainer = document.getElementById("refreshers"); 
    refreshers.forEach(name => { 
        refreshersContainer.insertAdjacentHTML("beforeend", buildItemHTML(name, ["size","coldfoam","toppings","sweetness","ice"])); 
    }); 

    /* ---------- Collapsible behavior (delegated) ---------- */ 
    document.addEventListener("click", (e) => { 
        if (e.target.classList && e.target.classList.contains("collapsible")) { 
            e.target.classList.toggle("active"); 
            const content = e.target.nextElementSibling; 
            if (!content) return; 
            if (content.style.maxHeight) { 
                content.style.maxHeight = null; 
            } else { 
                content.style.maxHeight = content.scrollHeight + "px"; 
            } 
        } 
    }); 

    /* ---------- Show/Hide customization ---------- */ 
    function toggleCustomization(id) { 
        const el = document.getElementById(id + "-customization"); 
        if (!el) return; 
        el.style.display = (el.style.display === "block") ? "none" : "block"; 
    } 
    
    /* ---------- Cart logic ---------- */ 
    let CART = []; 
    
    function addToCart(itemId) { 
        const panel = document.getElementById(itemId + "-customization"); 
        if (!panel) return; 
        const itemName = panel.dataset.item || itemId; 
        const qtyEl = panel.querySelector(`input[name="${itemId}-qty"]`); 
        const qty = Math.max(1, parseInt(qtyEl?.value || "1", 10)); 
        
        // validate size if exists 
        const sizeEl = panel.querySelector('select[data-size="true"]'); 
        if (sizeEl) { 
            if (!sizeEl.value) { 
                alert("Please choose a size before adding to cart."); 
                // open panel and highlight size (optional) 
                panel.style.display = "block"; 
                sizeEl.focus(); 
                return; 
            } 
        } 
        
        // gather simple options (selects) 
        const selects = panel.querySelectorAll("select:not([data-size])"); 
        let selectOptions = {}; 
        selects.forEach(s => { 
            selectOptions[s.name] = s.value; 
        }); 
        
        // gather toppings (checkboxes with name pattern) 
        const toppings = []; 
        panel.querySelectorAll('input[type="checkbox"][name^="'+itemId+'-topping"]').forEach(cb => { 
            if (cb.checked) toppings.push(cb.value); 
        });
        
        const size = sizeEl ? sizeEl.value : null; 
            
        // create cart item 
        const cartItem = { 
            id: itemId + "-" + Date.now() + "-" + Math.floor(Math.random()*1000), 
            name: itemName, 
            quantity: qty, 
            size, 
            options: selectOptions, 
            toppings 
        }; 
        
        CART.push(cartItem); 
        renderCart(); 
        // Optional: close panel after add 
        panel.style.display = "none"; 
    } 

    function renderCart() { 
        const container = document.getElementById("cart-items"); 
        container.innerHTML = ""; 
        if (CART.length === 0) { 
            container.innerHTML = '<p style="color:rgba(224,224,224,0.6)">Cart is empty</p>'; 
            return; 
        } 
        CART.forEach(item => { 
            const div = document.createElement("div"); 
            div.className = "cart-item"; d
            iv.innerHTML = ` 
                <strong>${escapeHtml(item.name)} x${item.quantity}</strong> 
                ${item.size ? `
                    <div>
                        <small>Size: ${escapeHtml(item.size)}</small>
                    </div>` : ""
                } ${Object.keys(item.options).length ? `
                    <div>
                        <small>Options: ${escapeHtml(Object.values(item.options).filter(Boolean).join(", ") || "—")}</small>
                    </div>`: ""
                } 
                ${item.toppings.length ? `
                    <div>
                        <small>Toppings: ${escapeHtml(item.toppings.join(", "))}</small>
                    </div>` : ""
                } 
                <div style="margin-top:6px"> 
                    <button class="btn remove" onclick="removeCartItem('${item.id}')">Remove</button> 
                    </div> 
                    `; 
                    container.appendChild(div); 
                }); 
            } 
            function removeCartItem(id) { 
                CART = CART.filter(i => i.id !== id); 
                renderCart(); 
            } 
            function clearCart() { 
                if (!confirm("Clear cart?")) return; 
                CART = []; 
                renderCart(); 
            } 
            
            /* simple escape to avoid HTML injection in cart text */ 
            function escapeHtml(str) { 
                if (!str) return ""; 
                return String(str).replace(/[&<>"']/g, s => ({ 
                    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' 
                }[s])); 
            } 
        /* initialize (render empty cart) */ 
        renderCart();