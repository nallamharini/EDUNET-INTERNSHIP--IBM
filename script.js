/* ------------------ Sample product data (multiple per category) ------------------ */
const SAMPLE_PRODUCTS = [
  // Clothing
  
  {id:'p10', title:'Denim Jacket', price:3299, category:'clothing', img:'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=60', desc:'Classic blue denim jacket.'},
  {id:'p14', title:'Cotton T-Shirt', price:899, category:'clothing', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60', desc:'Comfortable cotton t-shirt.'},
  {id:'p15', title:'Winter Sweater', price:1899, category:'clothing', img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=60', desc:'Warm woolen sweater.'},
  {id:'p1', title:'Neon Street Hoodie', price:2499, category:'clothing', img:'https://slanderofficial.com/products/neon-mechanical-hoodie-lightweight', desc:'Soft hoodie with neon piping.'},
  // Appliances
  
  {id:'p16', title:'Microwave Oven', price:8999, category:'appliances', img:'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=60', desc:'20L capacity microwave oven.'},
  {id:'p17', title:'Coffee Maker', price:3499, category:'appliances', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60', desc:'Automatic drip coffee maker.'},
  {id:'p18', title:'Air Purifier', price:12999, category:'appliances', img:'htt://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=60', desc:'HEPA filter air purifier.'},
  {id:'p2', title:'Retro Table Fan', price:1999, category:'appliances', img:'https://www.amazon.com/Exquisite-Vintage-Antique-Display-Showcase/dp/B0DGV5JJTF', desc:'Quiet retro-style fan.'},
  // Fashion
  {id:'p3', title:'Summer Dress', price:3799, category:'fashion', img:'https://www.shutterstock.com/search/blue-green-dress', desc:'Flowy, colorful summer dress.'},
  {id:'p19', title:'Designer Handbag', price:8999, category:'fashion', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=60', desc:'Luxury leather handbag.'},
  {id:'p20', title:'Silk Scarf', price:2299, category:'fashion', img:'https://www.macys.com/shop/all-brands?id=63538', desc:'Premium silk scarf.'},
  {id:'p21', title:'Evening Gown', price:12999, category:'fashion', img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=60', desc:'Elegant evening gown.'},
  
  // Kids & Toys
  {id:'p4', title:'Building Blocks Set', price:899, category:'kids-toys', img:'https://www.amazon.com', desc:'Fun and educational blocks.'},
  {id:'p22', title:'Remote Control Car', price:1999, category:'kids-toys', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60', desc:'Fast RC car with LED lights.'},
  {id:'p23', title:'Educational Tablet', price:4999, category:'kids-toys', img:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=60', desc:'Kid-safe learning tablet.'},
  {id:'p24', title:'Art Supplies Kit', price:1299, category:'kids-toys', img:'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=60', desc:'Complete art and craft kit.'},
  
  // Beauty
  {id:'p6', title:'Beauty Kit', price:1499, category:'beauty', img:'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=60', desc:'Mini beauty kit for daily care.'},
  {id:'p28', title:'Skincare Set', price:2999, category:'beauty', img:'https://www.amazon.com', desc:'Complete skincare routine set.'},
  {id:'p29', title:'Perfume Collection', price:4999, category:'beauty', img:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=60', desc:'Luxury fragrance collection.'},
  {id:'p30', title:'Makeup Palette', price:2299, category:'beauty', img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=60', desc:'Professional makeup palette.'},
  
  // Home
  {id:'p8', title:'Cozy Cushion', price:1799, category:'home', img:'https://www.amazon.com', desc:'Soft cushions for living spaces.'},
  {id:'p34', title:'Decorative Lamp', price:2499, category:'home', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60', desc:'Modern table lamp.'},
  {id:'p35', title:'Wall Art', price:1299, category:'home', img:'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=60', desc:'Abstract wall painting.'},
  {id:'p36', title:'Plant Pot Set', price:899, category:'home', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=60', desc:'Ceramic plant pot collection.'},
  
  // Furniture
  {id:'p9', title:'Wooden Chair', price:4599, category:'furniture', img:'https://www.amazon.com', desc:'Handcrafted wooden chair.'},
  {id:'p37', title:'Office Desk', price:8999, category:'furniture', img:'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=60', desc:'Modern office desk.'},
  {id:'p38', title:'Bookshelf', price:5999, category:'furniture', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=60', desc:'5-tier wooden bookshelf.'},
  {id:'p39', title:'Sofa Set', price:25999, category:'furniture', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=60', desc:'3-seater fabric sofa.'},
  
  // Jewellery
 
  {id:'p40', title:'Gold Earrings', price:8999, category:'jewellery', img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=60', desc:'Diamond stud earrings.'},
  {id:'p41', title:'Pearl Bracelet', price:4999, category:'jewellery', img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=60', desc:'Classic pearl bracelet.'},
  {id:'p42', title:'Wedding Ring', price:15999, category:'jewellery', img:'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=60', desc:'Platinum wedding ring.'},
  
  // Footwear
   {id:'p44', title:'Casual Sandals', price:2299, category:'footwear', img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=60', desc:'Comfortable summer sandals.'},
  {id:'p45', title:'Formal Shoes', price:3999, category:'footwear', img:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=60', desc:'Classic formal oxford shoes.'},
 
  {id:'p11', title:'Running Sneakers', price:4599, category:'footwear', img:'hps://www.macys.com/shop/all-brands?id=63538', desc:'Lightweight trainers.'},
  {id:'p43', title:'Leather Boots', price:6999, category:'footwear', img:'hps://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=60', desc:'Premium leather boots.'},
 
   
  // Accessories
  {id:'p46', title:'Sunglasses', price:2999, category:'accessories', img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=60', desc:'UV protection sunglasses.'},
  {id:'p47', title:'Smart Band', price:3999, category:'accessories', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60', desc:'Fitness tracking smart band.'},
  {id:'p48', title:'Leather Wallet', price:1999, category:'accessories', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=60', desc:'Genuine leather wallet.'},
  {id:'p12', title:'Glow Phone Case', price:799, category:'accessories', img:'https://www.amazon.com', desc:'Glows in low light.'},
];


    /* ------------------ App state ------------------ */
    let PRODUCTS = JSON.parse(localStorage.getItem('lc_products')) || SAMPLE_PRODUCTS.slice();
    let currentCategory = 'all';
    let user = JSON.parse(localStorage.getItem('lc_user')) || null;
    let usersList = JSON.parse(localStorage.getItem('lc_users')) || []; // saved accounts
    let cart = JSON.parse(localStorage.getItem('lc_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('lc_wishlist')) || [];
    let orders = JSON.parse(localStorage.getItem('lc_orders')) || [];

    /* ------------------ DOM refs ------------------ */
    const gallery = document.getElementById('gallery');
    const categoryList = document.getElementById('categoryList');
    const totalProducts = document.getElementById('totalProducts');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalContent = document.getElementById('modalContent');
    const authBackdrop = document.getElementById('authBackdrop');
    const authModal = document.getElementById('authModal');
    const topRightNav = document.getElementById('topRightNav');
    const authControls = document.getElementById('authControls');
    const wishCount = document.getElementById('wishCount');
    const cartCount = document.getElementById('cartCount');
    const floatingCart = document.getElementById('floatingCart');
    const floatingTotal = document.getElementById('floatingTotal');
    const toast = document.getElementById('toast');
    const loginOpenBtn = document.getElementById('loginOpenBtn');

    /* ------------------ Utilities ------------------ */
    function saveAll(){
      localStorage.setItem('lc_products', JSON.stringify(PRODUCTS));
      localStorage.setItem('lc_cart', JSON.stringify(cart));
      localStorage.setItem('lc_wishlist', JSON.stringify(wishlist));
      localStorage.setItem('lc_orders', JSON.stringify(orders));
      localStorage.setItem('lc_user', JSON.stringify(user));
      localStorage.setItem('lc_users', JSON.stringify(usersList));
    }
    function showToast(msg){
      toast.innerText = msg; toast.style.display='block';
      setTimeout(()=>toast.style.display='none', 2600);
    }
    function openAuth(){ authBackdrop.style.display='flex'; }
    function closeAuth(){ authBackdrop.style.display='none'; }
    function openModal(html){ modalBackdrop.style.display='flex'; modalContent.className='modal show'; modalContent.innerHTML=html; }
    function closeModal(){ modalBackdrop.style.display='none'; modalContent.innerHTML=''; }

    /* ---------------- Authentication ---------------- */
    function openLogin(){ openAuth(); }
    function login(){
      const email = document.getElementById('authEmail').value.trim().toLowerCase();
      const pw = document.getElementById('authPassword').value.trim();
      if(!email || !pw){ alert('Please provide email & password'); return; }
      const account = usersList.find(u=>u.email===email && u.pw===pw);
      if(!account){ alert('No account found or wrong credentials. Try Registering.'); return; }
      user = {email: account.email, name: account.name || account.email.split('@')[0]};
      saveAll(); closeAuth(); showToast('Welcome back, '+user.name+'!'); updateUIAfterAuth();
    }
    function registerUser(){
      const email = document.getElementById('authEmail').value.trim().toLowerCase();
      const pw = document.getElementById('authPassword').value.trim();
      if(!email || !pw){ alert('Please provide email & password'); return; }
      if(usersList.find(u=>u.email===email)){ alert('Account with this email already exists. Please login.'); return; }
      const name = email.split('@')[0];
      usersList.push({email, pw, name});
      user = {email, name};
      saveAll(); closeAuth(); showToast('Registered as '+name); updateUIAfterAuth();
    }
    function logoutIfNotLoggedIn(e){ if(!user){ e.preventDefault(); openAuth(); } }
    function logout(){ user=null; saveAll(); updateUIAfterAuth(); showToast('Logged out'); }

    /* ------------------ Render categories & gallery ------------------ */
    function renderCategories(){
      // full set of categories per requirements
      const cats = ['all','clothing','appliances','fashion','kids-toys','electronics','beauty','travel','home','furniture','jewellery','footwear','accessories'];
      categoryList.innerHTML = '';
      cats.forEach(c=>{
        const el = document.createElement('div'); el.className='category';
        const label = c==='all' ? 'All' : c.replace('-',' & ');
        const dot = c==='all' ? 'A' : c[0].toUpperCase();
        const count = c==='all' ? PRODUCTS.length : PRODUCTS.filter(p=>p.category===c).length;
        el.innerHTML = `<div class="dot">${dot}</div><div style="flex:1"><strong style="color:white">${label}</strong><div style="font-size:12px;color:rgba(255,255,255,0.6)">${count} items</div></div>`;
        el.onclick = ()=>{ filterBy(c); };
        categoryList.appendChild(el);
      });
      totalProducts.innerText = PRODUCTS.length + ' items';
    }

    function renderGallery(){
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      let list = PRODUCTS.filter(p=> (currentCategory==='all' || p.category===currentCategory) &&
                         (p.title.toLowerCase().includes(q) || (p.desc||'').toLowerCase().includes(q)) );
      gallery.innerHTML = '';
      if(list.length===0){
        gallery.innerHTML = `<div style="padding:40px;color:rgba(255,255,255,0.6)">No products found.</div>`;
        updateCounts(); return;
      }
      list.forEach(p=>{
        const c = document.createElement('div'); c.className='card';
        c.innerHTML = `
          <div class="product-image"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
          <div class="title" onclick="openProduct('${p.id}')" style="cursor:pointer">${p.title}</div>
          <div class="desc">${p.desc || ''}</div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div class="price">₹${p.price}</div>
            <div class="pill">${p.category.replace('-',' & ')}</div>
          </div>
          <div class="actions">
            <div style="display:flex;gap:8px">
              <button class="btn" onclick="addToWishlist('${p.id}')">♡ Wishlist</button>
              <button class="btn" onclick="openProduct('${p.id}')">View</button>
            </div>
            <div>
              <button class="btn" onclick="addToCart('${p.id}')">Add to cart</button>
            </div>
          </div>
        `;
        gallery.appendChild(c);
      });
      updateCounts();
    }

    function openProduct(id){
      const p = PRODUCTS.find(x=>x.id===id);
      if(!p) return;
      openModal(`
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div><h2 style="color:white;margin:0">${p.title}</h2><div style="margin-top:6px;color:rgba(255,255,255,0.7)">${p.desc || ''}</div></div>
          <div><button class="btn" onclick="closeModal()">Close</button></div>
        </div>
        <div style="height:12px"></div>
        <div class="product-grid">
          <div><img src="${p.img}" alt="${p.title}" style="max-width:400px;width:100%;border-radius:12px;object-fit:cover"></div>
          <div style="flex:1;padding-left:20px">
            <div style="font-size:28px;font-weight:800;color:white;margin-bottom:15px">₹${p.price.toLocaleString()}</div>
            <div style="margin-bottom:15px;padding:10px;background:rgba(255,255,255,0.05);border-radius:8px">
              <div style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:5px">Category</div>
              <div style="color:white;font-weight:600">${p.category.replace('-',' & ')}</div>
            </div>
            <div style="margin-bottom:15px;padding:10px;background:rgba(255,255,255,0.05);border-radius:8px">
              <div style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:5px">Product ID</div>
              <div style="color:white;font-weight:600">${p.id}</div>
            </div>
            <div style="margin-bottom:15px;padding:10px;background:rgba(255,255,255,0.05);border-radius:8px">
              <div style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:5px">Description</div>
              <div style="color:white;line-height:1.5">${p.desc || 'No description available'}</div>
            </div>
            <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">
              <button class="btn" onclick="addToCart('${p.id}');closeModal()" style="background:linear-gradient(135deg,var(--accent1),var(--accent2));color:white;font-weight:600">Add to Cart</button>
              <button class="btn" onclick="addToWishlist('${p.id}');closeModal()" style="background:rgba(255,255,255,0.1);color:white;font-weight:600">♡ Add to Wishlist</button>
            </div>
            <div style="margin-top:20px;padding:15px;background:rgba(255,255,255,0.03);border-radius:8px;border-left:3px solid var(--accent1)">
              <div style="color:rgba(255,255,255,0.8);font-size:13px;margin-bottom:8px">💡 Quick Actions</div>
              <div style="color:rgba(255,255,255,0.7);font-size:13px">You can also <a href="#" onclick="filterBy('${p.category}');closeModal();return false" style="color:var(--accent2);text-decoration:none">browse more ${p.category.replace('-',' & ')} items</a> or <a href="#" onclick="closeModal();document.getElementById('searchInput').value='${p.title}';renderGallery();return false" style="color:var(--accent2);text-decoration:none">search for similar products</a>.</div>
            </div>
          </div>
        </div>
      `);
    }

    /* ---------------- Cart, Wishlist & Orders ---------------- */
    function addToCart(id){
      const p = PRODUCTS.find(x=>x.id===id);
      if(!p) return;
      const existing = cart.find(c=>c.id===id);
      if(existing) existing.qty++;
      else cart.push({id:p.id,title:p.title,price:p.price,qty:1});
      saveAll(); updateCounts(); showToast('Added to cart');
      floatingCart.style.display='block';
    }

    function addToWishlist(id){
      if(!wishlist.includes(id)) wishlist.push(id);
      saveAll(); updateCounts(); showToast('Added to wishlist');
    }

    function openCart(){
      if(cart.length===0){ openModal(`<h3 style="color:white">Cart</h3><div style="margin-top:8px">No items yet</div><div style="text-align:right;margin-top:12px"><button class="btn" onclick="closeModal()">Close</button></div>`); return; }
      const items = cart.map(i=>`<div class="list-item"><div style="display:flex;justify-content:space-between"><div>${i.title} x${i.qty}</div><div>₹${i.price*i.qty}</div></div></div>`).join('');
      openModal(`
        <h3 style="color:white">Your Cart</h3>
        <div style="margin-top:10px">${items}</div>
        <div style="height:12px"></div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <strong>Total: ₹${cartTotal()}</strong>
          <div><button class="btn" onclick="checkout()">Checkout</button> <button class="btn" onclick="closeModal()">Close</button></div>
        </div>
      `);
    }

    function cartTotal(){ return cart.reduce((s,i)=>s + i.price * i.qty, 0); }

    function openWishlist(){
      if(wishlist.length===0){ openModal(`<h3 style="color:white">Wishlist</h3><div style="margin-top:8px">No items yet</div><div style="text-align:right;margin-top:12px"><button class="btn" onclick="closeModal()">Close</button></div>`); return; }
      const items = wishlist.map(id=>{ const p=PRODUCTS.find(x=>x.id===id); return `<div class="list-item"><div style="display:flex;justify-content:space-between"><div>${p.title}</div><div>₹${p.price}</div></div></div>` }).join('');
      openModal(`<h3 style="color:white">Wishlist</h3><div style="margin-top:8px">${items}</div><div style="text-align:right;margin-top:12px"><button class="btn" onclick="closeModal()">Close</button></div>`);
    }

    function checkout(){
      if(!user){ openAuth(); return; }
      if(cart.length===0){ alert('Cart is empty'); return; }
      const total = cartTotal();
      openModal(`
        <h3 style="color:white">Checkout</h3>
        <div style="margin-top:8px">Total amount: <strong>₹${total}</strong></div>
        <div style="margin-top:10px" class="field"><label style="color:rgba(255,255,255,0.8)">Choose payment mode</label>
          <select id="paymentMode" style="padding:10px;border-radius:8px;border:0;background:rgba(255,255,255,0.03);color:var(--muted);width:100%">
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Cash on Delivery</option>
            <option>Net Banking</option>
          </select>
        </div>
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
          <button class="btn" onclick="placeOrder()">Place order</button>
          <button class="btn" onclick="closeModal()">Cancel</button>
        </div>
      `);
    }

    function placeOrder(){
      const pm = document.getElementById('paymentMode') ? document.getElementById('paymentMode').value : 'Unknown';
      const total = cartTotal();
      const order = {id:'o'+Date.now(),items:cart.slice(),total,paidWith:pm,date:new Date().toISOString()};
      orders.push(order);
      cart = [];
      saveAll();
      closeModal();
      updateCounts();
      showToast('Order placed — Total: ₹'+order.total+' ('+pm+')');
      // Also show a confirmation modal
      openModal(`<h3 style="color:white">Order Confirmed</h3><div style="margin-top:10px">Order ID: <strong>${order.id}</strong></div><div style="margin-top:6px">Total paid: <strong>₹${order.total}</strong></div><div style="margin-top:12px;text-align:right"><button class="btn" onclick="closeModal()">Close</button></div>`);
    }

    function openOrders(){
      if(!user){ openAuth(); return; }
      if(orders.length===0){ openModal(`<h3 style="color:white">Orders</h3><div style="margin-top:8px">No orders yet</div><div style="text-align:right;margin-top:12px"><button class="btn" onclick="closeModal()">Close</button></div>`); return; }
      const items = orders.map(o=>`<div class="list-item"><div style="display:flex;justify-content:space-between"><div><strong>Order ${o.id}</strong><div style="font-size:12px;color:rgba(255,255,255,0.6)">${new Date(o.date).toLocaleString()}</div></div><div>₹${o.total}</div></div><div style="margin-top:8px;color:rgba(255,255,255,0.75)">${o.items.map(i=>i.title+' x'+i.qty).join(', ')}</div></div>`).join('');
      openModal(`<h3 style="color:white">Your Orders</h3><div style="margin-top:10px">${items}</div><div style="text-align:right;margin-top:12px"><button class="btn" onclick="closeModal()">Close</button></div>`);
    }

    function updateCounts(){
      wishCount.innerText = wishlist.length;
      cartCount.innerText = cart.reduce((s,i)=>s + i.qty, 0);
      // Update guest buttons too
      const wishCountGuest = document.getElementById('wishCountGuest');
      const cartCountGuest = document.getElementById('cartCountGuest');
      if(wishCountGuest) wishCountGuest.innerText = wishlist.length;
      if(cartCountGuest) cartCountGuest.innerText = cart.reduce((s,i)=>s + i.qty, 0);
      floatingTotal.innerText = '₹' + cartTotal();
      floatingCart.style.display = cart.length > 0 ? 'block' : 'none';
      totalProducts.innerText = PRODUCTS.length + ' items';
    }

    /* -------------------- UI helpers -------------------- */
    function updateUIAfterAuth(){
      if(user){ topRightNav.style.display='flex'; authControls.style.display='none'; document.getElementById('profileBtn').onclick = ()=>{ alert('Profile: '+user.email) }; document.getElementById('ordersBtn').onclick = openOrders; document.getElementById('wishlistBtn').onclick = openWishlist; document.getElementById('cartBtn').onclick = openCart; document.getElementById('logoutBtn').onclick = logout; } 
      else { topRightNav.style.display='none'; authControls.style.display='block'; }
      updateCounts();
    }

    function filterBy(cat){
      currentCategory = cat;
      renderGallery();
      showToast(cat==='all' ? 'Showing all products' : 'Showing category: ' + cat.replace('-',' & '));
    }

    /* ------------------- Wire actions -------------------- */
    loginOpenBtn.onclick = openAuth;
    modalBackdrop.addEventListener('click', (e)=>{ if(e.target===modalBackdrop) closeModal(); });
    authBackdrop.addEventListener('click', (e)=>{ if(e.target===authBackdrop) closeAuth(); });

    document.getElementById('wishlistBtn').onclick = openWishlist;
    document.getElementById('cartBtn').onclick = openCart;
    
    // Guest button handlers
    document.getElementById('wishlistBtnGuest').onclick = openWishlist;
    document.getElementById('cartBtnGuest').onclick = openCart;
    document.getElementById('ordersBtnGuest').onclick = openOrders;

    /* ------------------ Init ------------------ */
    renderCategories(); renderGallery(); updateUIAfterAuth();

    // gentle mark animation
    (function smallAnimation(){ const mark = document.querySelector('.mark'); setInterval(()=>{ mark.style.transform = 'rotate('+(Math.random()*12-6)+'deg) scale('+(1+Math.random()*0.02)+')' },2400) })();