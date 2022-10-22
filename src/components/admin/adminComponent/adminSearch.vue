<template>
<div>
  <div class="search search_header">
    <div class="search-container">
      <span class="icon"><i class="far fa-search"></i></span>
      <input type="search" id="search" placeholder="Поиск..." />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AdminSearch"
}
</script>

<style scoped>
.search {
  width: 100%;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
}
.search_header {
  margin-right: 12px;
}
.search-container {
  width: 100%;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
}
.search-container input#search {
  width: 100%;
  height: 40px;
  background: var(--inset-color);
  border: 1px solid var(--border-light);
  font-size: 10pt;
  float: left;
  text-align: left;
  color: var(--text-color-gray);
  padding-left: 50px;
  -webkit-border-radius: var(--radius-8);
  -moz-border-radius: var(--radius-8);
  border-radius: var(--radius-8);
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  -ms-transition: 0.2s ease;
  -o-transition: 0.2s ease;
  transition: 0.2s ease;
}
.search-container input#search::-webkit-input-placeholder {
  color: var(--text-color-gray);
}
.search-container input#search:-moz-placeholder {
  /* Firefox 18- */
  color: var(--text-color-gray);
}
.search-container input#search::-moz-placeholder {
  /* Firefox 19+ */
  color: var(--text-color-gray);
}
.search-container input#search:-ms-input-placeholder {
  color:var(--text-color-gray);
}
.search-container .icon {
  position: absolute;
  width: 40px;
  height: 38px;
  border-radius: var(--radius-8);
  background: var(--inset-color);
  margin-left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: var(--text-color-gray);
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  -ms-transition: 0.2s ease;
  -o-transition: 0.2s ease;
  transition: 0.2s ease;
}
.search-container input#search:hover,
.search-container input#search:focus,
.search-container input#search:active {
  outline: none;
  background: var(--content-color-hover);
  border: 1px solid var(--primary-color);
}
.search-container:hover .icon,
.search-container input#search:focus .icon,
.search-container input#search:active .icon {
  background: var(--content-color-hover) !important;
}
</style>